/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface StrategyProxyContract
  extends Truffle.Contract<StrategyProxyInstance> {
  "new"(
    _proxy: string,
    meta?: Truffle.TransactionDetails
  ): Promise<StrategyProxyInstance>;
}

type AllEvents = never;

export interface StrategyProxyInstance extends Truffle.ContractInstance {
  approveStrategy: {
    (_strategy: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _strategy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _strategy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _strategy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  balanceOf(
    _gauge: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  crv(txDetails?: Truffle.TransactionDetails): Promise<string>;

  deposit: {
    (
      _gauge: string,
      _token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _gauge: string,
      _token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _gauge: string,
      _token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _gauge: string,
      _token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  gauge(txDetails?: Truffle.TransactionDetails): Promise<string>;

  governance(txDetails?: Truffle.TransactionDetails): Promise<string>;

  harvest: {
    (_gauge: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_gauge: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _gauge: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _gauge: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  lock: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  mintr(txDetails?: Truffle.TransactionDetails): Promise<string>;

  proxy(txDetails?: Truffle.TransactionDetails): Promise<string>;

  revokeStrategy: {
    (_strategy: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _strategy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _strategy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _strategy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setGovernance: {
    (_governance: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _governance: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _governance: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _governance: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  strategies(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  vote: {
    (
      _gauge: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _gauge: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _gauge: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _gauge: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  withdraw: {
    (
      _gauge: string,
      _token: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _gauge: string,
      _token: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _gauge: string,
      _token: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _gauge: string,
      _token: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  withdrawAll: {
    (
      _gauge: string,
      _token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _gauge: string,
      _token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _gauge: string,
      _token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _gauge: string,
      _token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  y(txDetails?: Truffle.TransactionDetails): Promise<string>;

  methods: {
    approveStrategy: {
      (_strategy: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _strategy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _strategy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _strategy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    balanceOf(
      _gauge: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    crv(txDetails?: Truffle.TransactionDetails): Promise<string>;

    deposit: {
      (
        _gauge: string,
        _token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _gauge: string,
        _token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _gauge: string,
        _token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _gauge: string,
        _token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    gauge(txDetails?: Truffle.TransactionDetails): Promise<string>;

    governance(txDetails?: Truffle.TransactionDetails): Promise<string>;

    harvest: {
      (_gauge: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _gauge: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _gauge: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _gauge: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    lock: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    mintr(txDetails?: Truffle.TransactionDetails): Promise<string>;

    proxy(txDetails?: Truffle.TransactionDetails): Promise<string>;

    revokeStrategy: {
      (_strategy: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _strategy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _strategy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _strategy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setGovernance: {
      (_governance: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _governance: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _governance: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _governance: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    strategies(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    vote: {
      (
        _gauge: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _gauge: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _gauge: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _gauge: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    withdraw: {
      (
        _gauge: string,
        _token: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _gauge: string,
        _token: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _gauge: string,
        _token: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _gauge: string,
        _token: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    withdrawAll: {
      (
        _gauge: string,
        _token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _gauge: string,
        _token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _gauge: string,
        _token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _gauge: string,
        _token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    y(txDetails?: Truffle.TransactionDetails): Promise<string>;
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
