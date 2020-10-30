/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface DelegatedControllerContract
  extends Truffle.Contract<DelegatedControllerInstance> {
  "new"(
    _rewards: string,
    meta?: Truffle.TransactionDetails
  ): Promise<DelegatedControllerInstance>;
}

type AllEvents = never;

export interface DelegatedControllerInstance extends Truffle.ContractInstance {
  balanceOf(
    _vault: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  claimInsurance: {
    (_vault: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_vault: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _vault: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _vault: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  converters(
    arg0: string,
    arg1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  delegatedHarvest: {
    (
      _strategy: string,
      parts: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _strategy: string,
      parts: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _strategy: string,
      parts: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _strategy: string,
      parts: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  earn: {
    (
      _vault: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _vault: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _vault: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _vault: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getExpectedReturn(
    _strategy: string,
    _token: string,
    parts: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  governance(txDetails?: Truffle.TransactionDetails): Promise<string>;

  harvest: {
    (
      _strategy: string,
      _token: string,
      parts: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _strategy: string,
      _token: string,
      parts: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _strategy: string,
      _token: string,
      parts: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _strategy: string,
      _token: string,
      parts: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  inCaseStrategyGetStruck: {
    (
      _strategy: string,
      _token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _strategy: string,
      _token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _strategy: string,
      _token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _strategy: string,
      _token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  inCaseTokensGetStuck: {
    (
      _token: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _token: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _token: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _token: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  isStrategy(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  isVault(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  max(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  onesplit(txDetails?: Truffle.TransactionDetails): Promise<string>;

  rewards(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setConverter: {
    (
      _input: string,
      _output: string,
      _converter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _input: string,
      _output: string,
      _converter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _input: string,
      _output: string,
      _converter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _input: string,
      _output: string,
      _converter: string,
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

  setOneSplit: {
    (_onesplit: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _onesplit: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _onesplit: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _onesplit: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setSplit: {
    (
      _split: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _split: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _split: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _split: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setStrategy: {
    (
      _vault: string,
      _strategy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _vault: string,
      _strategy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _vault: string,
      _strategy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _vault: string,
      _strategy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  split(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  strategies(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  vaults(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<string>;

  want(_vault: string, txDetails?: Truffle.TransactionDetails): Promise<string>;

  withdraw: {
    (
      _vault: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _vault: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _vault: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _vault: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  withdrawAll: {
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

  methods: {
    balanceOf(
      _vault: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    claimInsurance: {
      (_vault: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _vault: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _vault: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _vault: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    converters(
      arg0: string,
      arg1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    delegatedHarvest: {
      (
        _strategy: string,
        parts: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _strategy: string,
        parts: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _strategy: string,
        parts: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _strategy: string,
        parts: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    earn: {
      (
        _vault: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _vault: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _vault: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _vault: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getExpectedReturn(
      _strategy: string,
      _token: string,
      parts: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    governance(txDetails?: Truffle.TransactionDetails): Promise<string>;

    harvest: {
      (
        _strategy: string,
        _token: string,
        parts: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _strategy: string,
        _token: string,
        parts: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _strategy: string,
        _token: string,
        parts: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _strategy: string,
        _token: string,
        parts: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    inCaseStrategyGetStruck: {
      (
        _strategy: string,
        _token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _strategy: string,
        _token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _strategy: string,
        _token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _strategy: string,
        _token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    inCaseTokensGetStuck: {
      (
        _token: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _token: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _token: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _token: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    isStrategy(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    isVault(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    max(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    onesplit(txDetails?: Truffle.TransactionDetails): Promise<string>;

    rewards(txDetails?: Truffle.TransactionDetails): Promise<string>;

    setConverter: {
      (
        _input: string,
        _output: string,
        _converter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _input: string,
        _output: string,
        _converter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _input: string,
        _output: string,
        _converter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _input: string,
        _output: string,
        _converter: string,
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

    setOneSplit: {
      (_onesplit: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _onesplit: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _onesplit: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _onesplit: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setSplit: {
      (
        _split: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _split: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _split: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _split: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setStrategy: {
      (
        _vault: string,
        _strategy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _vault: string,
        _strategy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _vault: string,
        _strategy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _vault: string,
        _strategy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    split(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    strategies(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    vaults(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    want(
      _vault: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    withdraw: {
      (
        _vault: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _vault: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _vault: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _vault: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    withdrawAll: {
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
