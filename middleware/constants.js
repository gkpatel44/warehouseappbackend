const URLS = {
    TEST_BASE_URL: 'test.cashfree.com',
    PRODUCTION_BASE_URL: 'api.cashfree.com',

    VERIFY_CREDENTIALS: '/api/v1/credentials/verify',
  
    ORDER_CREATE: '/api/v1/order/create',
    ORDER_GET_LINK: '/api/v1/order/info/link',
    ORDER_GET_DETAILS: '/api/v1/order/info',
    ORDER_GET_STATUS: '/api/v1/order/info/status',
    ORDER_EMAIL: '/api/v1/order/email',
    ORDER_REFUND: '/api/v1/order/refund',
  
    TRANSACTIONS: '/api/v1/transactions',
  
    REFUNDS: '/api/v1/refunds',
    REFUND_STATUS: '/api/v1/refundStatus',
  
    SETTLEMENTS: '/api/v1/settlements',
    SETTLEMENT: '/api/v1/settlement',
  
  };

  const URLS1 = {
    TEST_BASE:'payout-gamma.cashfree.com',

    AUTH:'/payout/v1/authorize',
    VERIFY:'/payout/v1/verifyToken',
    GET_BALANCE:'/payout/v1/getBalance',
    SELF_WITHDRAWAL: '/payout/v1/selfWithdrawal',
    INTERNAL_TRANSFER: '/payout/v1/internalTransfer',

    
    BENEFICIARY_ADD: '/payout/v1/addBeneficiary',
    BENEFICIARY_GET_BY_ID: '/payout/v1/getBeneficiary/',
    BENEFICIARY_GET_ID_BY_BANK_DETAILS: '/payout/v1/getBeneId',
    BENEFICIARY_REMOVE: '/payout/v1/removeBeneficiary',
    BENEFICIARY_HISTORY:'/payout/v1/beneHistory',
  
    CASHGRAM_CREATE: '/payout/v1/createCashgram',
    CASHGRAM_GET_STATUS: '/payout/v1/getCashgramStatus',
    CASHGRAM_DEACTIVATE: '/payout/v1/deactivateCashgram',
  
    SELF_WITHDRAWAL: '/payout/v1/selfWithdrawal',
    GET_BALANCE: '/payout/v1/getBalance',
  
    REQUEST_TRANSFER: '/payout/v1/requestTransfer',
    ASYNC_REQUEST_TRANSFER: '/payout/v1/requestAsyncTransfer',
    GET_TRANSFER_STATUS: '/payout/v1/getTransferStatus',
    GET_TRANSFERS: '/payout/v1/getTransfers',
    REQUEST_BATCH_TRANSFER: '/payout/v1/requestBatchTransfer',
    GET_BATCH_TRANSFER_STATUS: '/payout/v1/getBatchTransferStatus',
  
    VALIDATE_BANK_DETAILS: '/payout/v1/validation/bankDetails',
    ASYNC_VALIDATE_BANK_DETAILS: '/payout/v1/asyncValidation/bankDetails',
    GET_BANK_VALIDATION_STATUS: '/payout/v1/getValidationStatus/bank',
    VALIDATE_UPI_DETAILS: '/payout/v1/validation/upiDetails',
    VALIDATE_BULK_BANK_ACTIVATION: '/payout/v1/bulkValidation/bankDetails',
    GET_BULK_VALIDATION_STATUS: '/payout/v1/getBulkValidationStatus',
  };
  
  module.exports = { ...URLS,...URLS1 };
  