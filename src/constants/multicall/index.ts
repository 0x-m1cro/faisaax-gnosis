import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.TESTNET]: '0x31c2985C535ee1b894D7647BAD07523183f7dFd6',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
