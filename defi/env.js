try{
    require('dotenv').config()
}catch(e){}
module.exports = {
    ETHEREUM_RPC: process.env.ETHEREUM_RPC,
    BSC_RPC: process.env.BSC_RPC,
    POLYGON_RPC: process.env.POLYGON_RPC,
    FANTOM_RPC: process.env.FANTOM_RPC,
    ARBITRUM_RPC: process.env.ARBITRUM_RPC,
    OPTIMISM_RPC: process.env.OPTIMISM_RPC,
    XDAI_RPC: process.env.XDAI_RPC,
    HARMONY_RPC: process.env.HARMONY_RPC,
    SOLANA_RPC: process.env.SOLANA_RPC,
    CRONOS_RPC: process.env.CRONOS_RPC,
    MOONRIVER_RPC: process.env.MOONRIVER_RPC,
    OUTDATED_WEBHOOK: process.env.OUTDATED_WEBHOOK,
    HOURLY_OUTDATED_WEBHOOK: process.env.HOURLY_OUTDATED_WEBHOOK,
    SPIKE_WEBHOOK: process.env.SPIKE_WEBHOOK,
    CLOUDWATCH_WEBHOOK_URL: process.env.CLOUDWATCH_WEBHOOK_URL,
    DROPS_WEBHOOK: process.env.DROPS_WEBHOOK,
    EULER_MONGODB_APIKEY: process.env.EULER_MONGODB_APIKEY,
    FATHOM_SECRET: process.env.FATHOM_SECRET,
    DAILY_GROWTH_WEBHOOK: process.env.DAILY_GROWTH_WEBHOOK,
    INFLUXDB_TOKEN: process.env.INFLUXDB_TOKEN,
    MONITOR_WEBHOOK: process.env.MONITOR_WEBHOOK,
    STALE_COINS_ADAPTERS_WEBHOOK: process.env.STALE_COINS_ADAPTERS_WEBHOOK,
    REVALIDATE_SECRET: process.env.REVALIDATE_SECRET,
    PROD_VYBE_API_KEY: process.env.PROD_VYBE_API_KEY,
    BIT_QUERY_API_KEY: process.env.BIT_QUERY_API_KEY,
    VOLUMES_WEBHOOK: process.env.VOLUMES_WEBHOOK,
    FEES_WEBHOOK: process.env.FEES_WEBHOOK,
    ZEROx_API_KEY: process.env.ZEROx_API_KEY,
    MISSING_COINS_DB_PWD: process.env.MISSING_COINS_DB_PWD,
    AGGREGATOR_DB_URL: process.env.AGGREGATOR_DB_URL
}
