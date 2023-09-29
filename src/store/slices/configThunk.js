import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.smarkets.com";

export const getEvents = createAsyncThunk(
  "config/getEvents",
  async (sport, { rejectWithValue }) => {
    try {
      // Get all the single events for the sport
      const { data: eventsData } = await axios.get(`${BASE_URL}/v3/events`, {
        params: {
          type_domain: sport,
          with_new_type: true,
          type_scope: "single_event",
        },
      });

      if (eventsData) {
        // Collect all the eventIds
        const eventsMap = new Map(
          eventsData?.events.map((event) => [event.id, event.name])
        );

        // Get all the popular markets for eventIds
        const { data: marketsData } = await axios.get(
          `${BASE_URL}/v3/events/${[...eventsMap.keys()].toString()}/markets`,
          {
            params: {
              popular: true,
            },
          }
        );

        if (marketsData) {
          // Collect all marketIds
          const marketIds = marketsData?.markets.map((market) => market.id);

          // Get all the contracts and price quotes for marketIds
          const [{ data: contractsData }, { data: quotesData }] =
            await Promise.all([
              axios.get(
                `${BASE_URL}/v3/markets/${marketIds.toString()}/contracts`
              ),
              axios.get(
                `${BASE_URL}/v3/markets/${marketIds.toString()}/quotes`
              ),
            ]).then((res) => res);

          const contractPricingData = contractsData.contracts?.map(
            (contract) => {
              const bid = quotesData[contract.id].bids[0];
              const offer = quotesData[contract.id].offers[0];

              return {
                ...contract,
                bid: bid ? (10000 / bid.price).toFixed(2) : undefined,
                offer: offer ? (10000 / offer.price).toFixed(2) : undefined,
                bidBackStake: bid
                  ? Math.round((bid.quantity * bid.price) / 100000000)
                  : undefined,
                offerBackStake: offer
                  ? Math.round((offer.quantity * offer.price) / 100000000)
                  : undefined,
              };
            }
          );

          const marketContractsMap = contractPricingData.reduce(
            (acc, contract) => {
              if (contract.bid && contract.offer) {
                const marketContracts = acc.get(contract.market_id);
                acc.set(contract.market_id, [
                  ...(marketContracts ?? []),
                  contract,
                ]);
              }

              return acc;
            },
            new Map()
          );

          // Return transformed data
          return marketsData?.markets.map((market) => ({
            ...market,
            eventName: eventsMap.get(market.event_id),
            contracts: marketContractsMap.get(market.id),
          })).filter((elem) => elem.contracts);
        }
      }
      return null;
    } catch ({ response }) {
      if (!response) {
        throw err;
      }

      return rejectWithValue(response.data);
    }
  }
);
