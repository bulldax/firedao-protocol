/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface HopeLikeContract extends Truffle.Contract<HopeLikeInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<HopeLikeInstance>;
}

type AllEvents = never;

export interface HopeLikeInstance extends Truffle.ContractInstance {
  hope: {
    (arg0: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  nope: {
    (arg0: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    hope: {
      (arg0: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(
        arg0: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        arg0: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    nope: {
      (arg0: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(
        arg0: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        arg0: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
