/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface StrategyCurveYVoterProxyContract
  extends Truffle.Contract<StrategyCurveYVoterProxyInstance> {
  "new"(
    _controller: string,
    meta?: Truffle.TransactionDetails
  ): Promise<StrategyCurveYVoterProxyInstance>;
}

export interface Harvested {
  name: "Harvested";
  args: {
    wantEarned: BN;
    lifetimeEarned: BN;
    0: BN;
    1: BN;
  };
}

type AllEvents = Harvested;

export interface StrategyCurveYVoterProxyInstance
  extends Truffle.ContractInstance {
  balanceOf(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  balanceOfPool(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  balanceOfWant(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  controller(txDetails?: Truffle.TransactionDetails): Promise<string>;

  crv(txDetails?: Truffle.TransactionDetails): Promise<string>;

  curve(txDetails?: Truffle.TransactionDetails): Promise<string>;

  dai(txDetails?: Truffle.TransactionDetails): Promise<string>;

  deposit: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  earned(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  gauge(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getName(txDetails?: Truffle.TransactionDetails): Promise<string>;

  governance(txDetails?: Truffle.TransactionDetails): Promise<string>;

  harvest: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  keepCRV(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  keepCRVMax(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  performanceFee(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  performanceMax(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  proxy(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setController: {
    (_controller: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _controller: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _controller: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _controller: string,
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

  setKeepCRV: {
    (
      _keepCRV: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _keepCRV: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _keepCRV: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _keepCRV: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setPerformanceFee: {
    (
      _performanceFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _performanceFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _performanceFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _performanceFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setProxy: {
    (_proxy: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_proxy: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _proxy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _proxy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setStrategist: {
    (_strategist: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _strategist: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _strategist: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _strategist: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setWithdrawalFee: {
    (
      _withdrawalFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _withdrawalFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _withdrawalFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _withdrawalFee: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  strategist(txDetails?: Truffle.TransactionDetails): Promise<string>;

  uni(txDetails?: Truffle.TransactionDetails): Promise<string>;

  voter(txDetails?: Truffle.TransactionDetails): Promise<string>;

  want(txDetails?: Truffle.TransactionDetails): Promise<string>;

  weth(txDetails?: Truffle.TransactionDetails): Promise<string>;

  withdrawAll: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<BN>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  withdrawalFee(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  withdrawalMax(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  ydai(txDetails?: Truffle.TransactionDetails): Promise<string>;

  methods: {
    balanceOf(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    balanceOfPool(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    balanceOfWant(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    controller(txDetails?: Truffle.TransactionDetails): Promise<string>;

    crv(txDetails?: Truffle.TransactionDetails): Promise<string>;

    curve(txDetails?: Truffle.TransactionDetails): Promise<string>;

    dai(txDetails?: Truffle.TransactionDetails): Promise<string>;

    deposit: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    earned(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    gauge(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getName(txDetails?: Truffle.TransactionDetails): Promise<string>;

    governance(txDetails?: Truffle.TransactionDetails): Promise<string>;

    harvest: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    keepCRV(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    keepCRVMax(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    performanceFee(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    performanceMax(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    proxy(txDetails?: Truffle.TransactionDetails): Promise<string>;

    setController: {
      (_controller: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _controller: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _controller: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _controller: string,
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

    setKeepCRV: {
      (
        _keepCRV: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _keepCRV: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _keepCRV: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _keepCRV: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setPerformanceFee: {
      (
        _performanceFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _performanceFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _performanceFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _performanceFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setProxy: {
      (_proxy: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _proxy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _proxy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _proxy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setStrategist: {
      (_strategist: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _strategist: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _strategist: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _strategist: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setWithdrawalFee: {
      (
        _withdrawalFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _withdrawalFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _withdrawalFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _withdrawalFee: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    strategist(txDetails?: Truffle.TransactionDetails): Promise<string>;

    uni(txDetails?: Truffle.TransactionDetails): Promise<string>;

    voter(txDetails?: Truffle.TransactionDetails): Promise<string>;

    want(txDetails?: Truffle.TransactionDetails): Promise<string>;

    weth(txDetails?: Truffle.TransactionDetails): Promise<string>;

    withdrawAll: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<BN>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    withdrawalFee(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    withdrawalMax(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    ydai(txDetails?: Truffle.TransactionDetails): Promise<string>;

    "withdraw(uint256)": {
      (
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    "withdraw(address)": {
      (_asset: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(_asset: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;
      sendTransaction(
        _asset: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _asset: string,
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
