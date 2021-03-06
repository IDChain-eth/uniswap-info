export const FACTORY_ADDRESS = '0x415bc70ab2b2db131e93d48532d2f214ec47b659'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://unpkg.com/idchain-default-token-list@latest/build/uniswap-default.tokenlist.json',
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = ['0x495c7f3a713870f68f8b418b355c085dfdc412c3']

// pair blacklist
export const PAIR_BLACKLIST = ['0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5']

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']
