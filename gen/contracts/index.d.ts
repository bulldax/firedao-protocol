/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { AaveContract } from "./Aave";
import { AaveTokenContract } from "./AaveToken";
import { BullContract } from "./Bull";
import { BullInterfaceContract } from "./BullInterface";
import { BVaultContract } from "./BVault";
import { ContextContract } from "./Context";
import { ControllerContract } from "./Controller";
import { ConverterContract } from "./Converter";
import { CreamtrollerContract } from "./Creamtroller";
import { CTokenContract } from "./CToken";
import { CurveYcrvVoterContract } from "./CurveYcrvVoter";
import { DaiJoinLikeContract } from "./DaiJoinLike";
import { DelegatedVaultContract } from "./DelegatedVault";
import { DErc20Contract } from "./DErc20";
import { DRewardsContract } from "./DRewards";
import { DummyStrategyContract } from "./DummyStrategy";
import { EndLikeContract } from "./EndLike";
import { Erc20Contract } from "./Erc20";
import { Erc20DetailedContract } from "./Erc20Detailed";
import { Erc20MintableContract } from "./Erc20Mintable";
import { GaugeContract } from "./Gauge";
import { GemJoinLikeContract } from "./GemJoinLike";
import { GemLikeContract } from "./GemLike";
import { GntJoinLikeContract } from "./GntJoinLike";
import { GovernanceContract } from "./Governance";
import { GovernorAlphaContract } from "./GovernorAlpha";
import { HopeLikeContract } from "./HopeLike";
import { IControllerContract } from "./IController";
import { ICurveFiContract } from "./ICurveFi";
import { Ierc20Contract } from "./Ierc20";
import { IRewardDistributionRecipientContract } from "./IRewardDistributionRecipient";
import { IRewardPoolContract } from "./IRewardPool";
import { IStrategyContract } from "./IStrategy";
import { IVaultContract } from "./IVault";
import { IWrappedVaultContract } from "./IWrappedVault";
import { JugLikeContract } from "./JugLike";
import { LendingPoolAddressesProviderContract } from "./LendingPoolAddressesProvider";
import { LpTokenWrapperContract } from "./LpTokenWrapper";
import { ManagerLikeContract } from "./ManagerLike";
import { MigrationsContract } from "./Migrations";
import { MinterRoleContract } from "./MinterRole";
import { MintrContract } from "./Mintr";
import { OneSplitAuditContract } from "./OneSplitAudit";
import { OracleContract } from "./Oracle";
import { OracleSecurityModuleContract } from "./OracleSecurityModule";
import { OsMedianizerContract } from "./OsMedianizer";
import { OwnableContract } from "./Ownable";
import { PotLikeContract } from "./PotLike";
import { ProxyContract } from "./Proxy";
import { RewardPoolContract } from "./RewardPool";
import { SpotLikeContract } from "./SpotLike";
import { StrategyContract } from "./Strategy";
import { StrategyCurve3CrvVoterProxyContract } from "./StrategyCurve3CrvVoterProxy";
import { StrategyCurveYVoterProxyContract } from "./StrategyCurveYVoterProxy";
import { StrategyDaiCurveContract } from "./StrategyDaiCurve";
import { StrategyDForceDaiContract } from "./StrategyDForceDai";
import { StrategyDForceUsdcContract } from "./StrategyDForceUsdc";
import { StrategyDForceUsdtContract } from "./StrategyDForceUsdt";
import { StrategyProxyContract } from "./StrategyProxy";
import { StrategyTusdCurveContract } from "./StrategyTusdCurve";
import { TestBullContract } from "./TestBull";
import { TestRewardPoolContract } from "./TestRewardPool";
import { TestStrategyContract } from "./TestStrategy";
import { TestTokenContract } from "./TestToken";
import { TestVaultContract } from "./TestVault";
import { TimelockContract } from "./Timelock";
import { TimelockInterfaceContract } from "./TimelockInterface";
import { UniContract } from "./Uni";
import { VatLikeContract } from "./VatLike";
import { VaultContract } from "./Vault";
import { VoteEscrowContract } from "./VoteEscrow";
import { VoterProxyContract } from "./VoterProxy";
import { WethContract } from "./Weth";
import { YErc20Contract } from "./YErc20";
import { ZapContract } from "./Zap";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "Aave"): AaveContract;
      require(name: "AaveToken"): AaveTokenContract;
      require(name: "Bull"): BullContract;
      require(name: "BullInterface"): BullInterfaceContract;
      require(name: "BVault"): BVaultContract;
      require(name: "Context"): ContextContract;
      require(name: "Controller"): ControllerContract;
      require(name: "Converter"): ConverterContract;
      require(name: "Creamtroller"): CreamtrollerContract;
      require(name: "cToken"): CTokenContract;
      require(name: "CurveYCRVVoter"): CurveYcrvVoterContract;
      require(name: "DaiJoinLike"): DaiJoinLikeContract;
      require(name: "DelegatedVault"): DelegatedVaultContract;
      require(name: "dERC20"): DErc20Contract;
      require(name: "dRewards"): DRewardsContract;
      require(name: "DummyStrategy"): DummyStrategyContract;
      require(name: "EndLike"): EndLikeContract;
      require(name: "ERC20"): Erc20Contract;
      require(name: "ERC20Detailed"): Erc20DetailedContract;
      require(name: "ERC20Mintable"): Erc20MintableContract;
      require(name: "Gauge"): GaugeContract;
      require(name: "GemJoinLike"): GemJoinLikeContract;
      require(name: "GemLike"): GemLikeContract;
      require(name: "GNTJoinLike"): GntJoinLikeContract;
      require(name: "Governance"): GovernanceContract;
      require(name: "GovernorAlpha"): GovernorAlphaContract;
      require(name: "HopeLike"): HopeLikeContract;
      require(name: "IController"): IControllerContract;
      require(name: "ICurveFi"): ICurveFiContract;
      require(name: "IERC20"): Ierc20Contract;
      require(
        name: "IRewardDistributionRecipient"
      ): IRewardDistributionRecipientContract;
      require(name: "IRewardPool"): IRewardPoolContract;
      require(name: "IStrategy"): IStrategyContract;
      require(name: "IVault"): IVaultContract;
      require(name: "IWrappedVault"): IWrappedVaultContract;
      require(name: "JugLike"): JugLikeContract;
      require(
        name: "LendingPoolAddressesProvider"
      ): LendingPoolAddressesProviderContract;
      require(name: "LPTokenWrapper"): LpTokenWrapperContract;
      require(name: "ManagerLike"): ManagerLikeContract;
      require(name: "Migrations"): MigrationsContract;
      require(name: "MinterRole"): MinterRoleContract;
      require(name: "Mintr"): MintrContract;
      require(name: "OneSplitAudit"): OneSplitAuditContract;
      require(name: "Oracle"): OracleContract;
      require(name: "OracleSecurityModule"): OracleSecurityModuleContract;
      require(name: "OSMedianizer"): OsMedianizerContract;
      require(name: "Ownable"): OwnableContract;
      require(name: "PotLike"): PotLikeContract;
      require(name: "Proxy"): ProxyContract;
      require(name: "RewardPool"): RewardPoolContract;
      require(name: "SpotLike"): SpotLikeContract;
      require(name: "Strategy"): StrategyContract;
      require(
        name: "StrategyCurve3CrvVoterProxy"
      ): StrategyCurve3CrvVoterProxyContract;
      require(
        name: "StrategyCurveYVoterProxy"
      ): StrategyCurveYVoterProxyContract;
      require(name: "StrategyDAICurve"): StrategyDaiCurveContract;
      require(name: "StrategyDForceDAI"): StrategyDForceDaiContract;
      require(name: "StrategyDForceUSDC"): StrategyDForceUsdcContract;
      require(name: "StrategyDForceUSDT"): StrategyDForceUsdtContract;
      require(name: "StrategyProxy"): StrategyProxyContract;
      require(name: "StrategyTUSDCurve"): StrategyTusdCurveContract;
      require(name: "TestBull"): TestBullContract;
      require(name: "TestRewardPool"): TestRewardPoolContract;
      require(name: "TestStrategy"): TestStrategyContract;
      require(name: "TestToken"): TestTokenContract;
      require(name: "TestVault"): TestVaultContract;
      require(name: "Timelock"): TimelockContract;
      require(name: "TimelockInterface"): TimelockInterfaceContract;
      require(name: "Uni"): UniContract;
      require(name: "VatLike"): VatLikeContract;
      require(name: "Vault"): VaultContract;
      require(name: "VoteEscrow"): VoteEscrowContract;
      require(name: "VoterProxy"): VoterProxyContract;
      require(name: "WETH"): WethContract;
      require(name: "yERC20"): YErc20Contract;
      require(name: "Zap"): ZapContract;
    }
  }
}

export { AaveContract, AaveInstance } from "./Aave";
export { AaveTokenContract, AaveTokenInstance } from "./AaveToken";
export { BullContract, BullInstance } from "./Bull";
export { BullInterfaceContract, BullInterfaceInstance } from "./BullInterface";
export { BVaultContract, BVaultInstance } from "./BVault";
export { ContextContract, ContextInstance } from "./Context";
export { ControllerContract, ControllerInstance } from "./Controller";
export { ConverterContract, ConverterInstance } from "./Converter";
export { CreamtrollerContract, CreamtrollerInstance } from "./Creamtroller";
export { CTokenContract, CTokenInstance } from "./CToken";
export {
  CurveYcrvVoterContract,
  CurveYcrvVoterInstance
} from "./CurveYcrvVoter";
export { DaiJoinLikeContract, DaiJoinLikeInstance } from "./DaiJoinLike";
export {
  DelegatedVaultContract,
  DelegatedVaultInstance
} from "./DelegatedVault";
export { DErc20Contract, DErc20Instance } from "./DErc20";
export { DRewardsContract, DRewardsInstance } from "./DRewards";
export { DummyStrategyContract, DummyStrategyInstance } from "./DummyStrategy";
export { EndLikeContract, EndLikeInstance } from "./EndLike";
export { Erc20Contract, Erc20Instance } from "./Erc20";
export { Erc20DetailedContract, Erc20DetailedInstance } from "./Erc20Detailed";
export { Erc20MintableContract, Erc20MintableInstance } from "./Erc20Mintable";
export { GaugeContract, GaugeInstance } from "./Gauge";
export { GemJoinLikeContract, GemJoinLikeInstance } from "./GemJoinLike";
export { GemLikeContract, GemLikeInstance } from "./GemLike";
export { GntJoinLikeContract, GntJoinLikeInstance } from "./GntJoinLike";
export { GovernanceContract, GovernanceInstance } from "./Governance";
export { GovernorAlphaContract, GovernorAlphaInstance } from "./GovernorAlpha";
export { HopeLikeContract, HopeLikeInstance } from "./HopeLike";
export { IControllerContract, IControllerInstance } from "./IController";
export { ICurveFiContract, ICurveFiInstance } from "./ICurveFi";
export { Ierc20Contract, Ierc20Instance } from "./Ierc20";
export {
  IRewardDistributionRecipientContract,
  IRewardDistributionRecipientInstance
} from "./IRewardDistributionRecipient";
export { IRewardPoolContract, IRewardPoolInstance } from "./IRewardPool";
export { IStrategyContract, IStrategyInstance } from "./IStrategy";
export { IVaultContract, IVaultInstance } from "./IVault";
export { IWrappedVaultContract, IWrappedVaultInstance } from "./IWrappedVault";
export { JugLikeContract, JugLikeInstance } from "./JugLike";
export {
  LendingPoolAddressesProviderContract,
  LendingPoolAddressesProviderInstance
} from "./LendingPoolAddressesProvider";
export {
  LpTokenWrapperContract,
  LpTokenWrapperInstance
} from "./LpTokenWrapper";
export { ManagerLikeContract, ManagerLikeInstance } from "./ManagerLike";
export { MigrationsContract, MigrationsInstance } from "./Migrations";
export { MinterRoleContract, MinterRoleInstance } from "./MinterRole";
export { MintrContract, MintrInstance } from "./Mintr";
export { OneSplitAuditContract, OneSplitAuditInstance } from "./OneSplitAudit";
export { OracleContract, OracleInstance } from "./Oracle";
export {
  OracleSecurityModuleContract,
  OracleSecurityModuleInstance
} from "./OracleSecurityModule";
export { OsMedianizerContract, OsMedianizerInstance } from "./OsMedianizer";
export { OwnableContract, OwnableInstance } from "./Ownable";
export { PotLikeContract, PotLikeInstance } from "./PotLike";
export { ProxyContract, ProxyInstance } from "./Proxy";
export { RewardPoolContract, RewardPoolInstance } from "./RewardPool";
export { SpotLikeContract, SpotLikeInstance } from "./SpotLike";
export { StrategyContract, StrategyInstance } from "./Strategy";
export {
  StrategyCurve3CrvVoterProxyContract,
  StrategyCurve3CrvVoterProxyInstance
} from "./StrategyCurve3CrvVoterProxy";
export {
  StrategyCurveYVoterProxyContract,
  StrategyCurveYVoterProxyInstance
} from "./StrategyCurveYVoterProxy";
export {
  StrategyDaiCurveContract,
  StrategyDaiCurveInstance
} from "./StrategyDaiCurve";
export {
  StrategyDForceDaiContract,
  StrategyDForceDaiInstance
} from "./StrategyDForceDai";
export {
  StrategyDForceUsdcContract,
  StrategyDForceUsdcInstance
} from "./StrategyDForceUsdc";
export {
  StrategyDForceUsdtContract,
  StrategyDForceUsdtInstance
} from "./StrategyDForceUsdt";
export { StrategyProxyContract, StrategyProxyInstance } from "./StrategyProxy";
export {
  StrategyTusdCurveContract,
  StrategyTusdCurveInstance
} from "./StrategyTusdCurve";
export { TestBullContract, TestBullInstance } from "./TestBull";
export {
  TestRewardPoolContract,
  TestRewardPoolInstance
} from "./TestRewardPool";
export { TestStrategyContract, TestStrategyInstance } from "./TestStrategy";
export { TestTokenContract, TestTokenInstance } from "./TestToken";
export { TestVaultContract, TestVaultInstance } from "./TestVault";
export { TimelockContract, TimelockInstance } from "./Timelock";
export {
  TimelockInterfaceContract,
  TimelockInterfaceInstance
} from "./TimelockInterface";
export { UniContract, UniInstance } from "./Uni";
export { VatLikeContract, VatLikeInstance } from "./VatLike";
export { VaultContract, VaultInstance } from "./Vault";
export { VoteEscrowContract, VoteEscrowInstance } from "./VoteEscrow";
export { VoterProxyContract, VoterProxyInstance } from "./VoterProxy";
export { WethContract, WethInstance } from "./Weth";
export { YErc20Contract, YErc20Instance } from "./YErc20";
export { ZapContract, ZapInstance } from "./Zap";
