export const minerPoolAndGCAAbi = [
    {
        inputs: [
            {
                internalType: 'address[]',
                name: '_gcaAgents',
                type: 'address[]',
            },
            { internalType: 'address', name: '_glowToken', type: 'address' },
            { internalType: 'address', name: '_governance', type: 'address' },
            {
                internalType: 'bytes32',
                name: '_requirementsHash',
                type: 'bytes32',
            },
            {
                internalType: 'address',
                name: '_earlyLiquidity',
                type: 'address',
            },
            { internalType: 'address', name: '_usdcToken', type: 'address' },
            { internalType: 'address', name: '_vetoCouncil', type: 'address' },
            {
                internalType: 'address',
                name: '_holdingContract',
                type: 'address',
            },
        ],
        stateMutability: 'payable',
        type: 'constructor',
    },
    {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
    },
    { inputs: [], name: 'AlreadyMintedToCarbonCreditAuction', type: 'error' },
    { inputs: [], name: 'BucketAlreadyDelayed', type: 'error' },
    { inputs: [], name: 'BucketAlreadyFinalized', type: 'error' },
    { inputs: [], name: 'BucketIndexOutOfBounds', type: 'error' },
    { inputs: [], name: 'BucketNotFinalized', type: 'error' },
    { inputs: [], name: 'BucketSubmissionEnded', type: 'error' },
    { inputs: [], name: 'BucketSubmissionNotOpen', type: 'error' },
    { inputs: [], name: 'CallerNotEarlyLiquidity', type: 'error' },
    { inputs: [], name: 'CallerNotGCA', type: 'error' },
    { inputs: [], name: 'CallerNotGCAAtIndex', type: 'error' },
    { inputs: [], name: 'CallerNotGovernance', type: 'error' },
    { inputs: [], name: 'CallerNotVetoCouncilMember', type: 'error' },
    {
        inputs: [],
        name: 'CannotDelayBucketThatNeedsToUpdateSlashNonce',
        type: 'error',
    },
    { inputs: [], name: 'CannotDelayEmptyBucket', type: 'error' },
    { inputs: [], name: 'CannotSetNonceToZero', type: 'error' },
    {
        inputs: [],
        name: 'CompensationPlanLengthMustBeGreaterThanZero',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ElectricityFutureAuctionBidMustBeGreaterThanMinimumBid',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ElectricityFuturesAuctionAuthorizationTooLong',
        type: 'error',
    },
    { inputs: [], name: 'ElectricityFuturesAuctionBidTooLow', type: 'error' },
    { inputs: [], name: 'ElectricityFuturesAuctionEnded', type: 'error' },
    {
        inputs: [],
        name: 'ElectricityFuturesAuctionInvalidSignature',
        type: 'error',
    },
    { inputs: [], name: 'ElectricityFuturesSignatureExpired', type: 'error' },
    { inputs: [], name: 'EmptyRoot', type: 'error' },
    { inputs: [], name: 'FailedInnerCall', type: 'error' },
    { inputs: [], name: 'GCCAlreadySet', type: 'error' },
    { inputs: [], name: 'GlowWeightGreaterThanTotalWeight', type: 'error' },
    { inputs: [], name: 'GlowWeightOverflow', type: 'error' },
    { inputs: [], name: 'HashesNotUpdated', type: 'error' },
    { inputs: [], name: 'IndexDoesNotMatchNextProposalIndex', type: 'error' },
    { inputs: [], name: 'InsufficientShares', type: 'error' },
    { inputs: [], name: 'InvalidGCAHash', type: 'error' },
    { inputs: [], name: 'InvalidProof', type: 'error' },
    { inputs: [], name: 'InvalidRelaySignature', type: 'error' },
    { inputs: [], name: 'InvalidShares', type: 'error' },
    { inputs: [], name: 'InvalidShortString', type: 'error' },
    { inputs: [], name: 'InvalidUserIndex', type: 'error' },
    { inputs: [], name: 'NoBalanceToPayout', type: 'error' },
    { inputs: [], name: 'NotGCA', type: 'error' },
    { inputs: [], name: 'NotUSDCToken', type: 'error' },
    { inputs: [], name: 'ProposalAlreadyUpdated', type: 'error' },
    { inputs: [], name: 'ProposalHashDoesNotMatch', type: 'error' },
    { inputs: [], name: 'ProposalHashesEmpty', type: 'error' },
    { inputs: [], name: 'ProposalHashesNotUpdated', type: 'error' },
    { inputs: [], name: 'ReportGCCMustBeLT200Billion', type: 'error' },
    { inputs: [], name: 'ReportWeightMustBeLTUint64MaxDiv5', type: 'error' },
    {
        inputs: [
            { internalType: 'uint8', name: 'bits', type: 'uint8' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
        ],
        name: 'SafeCastOverflowedUintDowncast',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
        type: 'error',
    },
    { inputs: [], name: 'SignatureDoesNotMatchUser', type: 'error' },
    { inputs: [], name: 'SignerNotGCA', type: 'error' },
    { inputs: [], name: 'SlashedAgentCannotClaimReward', type: 'error' },
    {
        inputs: [{ internalType: 'string', name: 'str', type: 'string' }],
        name: 'StringTooLong',
        type: 'error',
    },
    { inputs: [], name: 'USDCWeightGreaterThanTotalWeight', type: 'error' },
    { inputs: [], name: 'USDCWeightOverflow', type: 'error' },
    { inputs: [], name: 'UserAlreadyClaimed', type: 'error' },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'bucketId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'gca',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'slashNonce',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalNewGCC',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalGlwRewardsWeight',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalGRCRewardsWeight',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'root',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'extraData',
                type: 'bytes',
            },
        ],
        name: 'BucketSubmissionEvent',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'agent',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint32[5]',
                name: 'plan',
                type: 'uint32[5]',
            },
        ],
        name: 'CompensationPlanSubmitted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [],
        name: 'EIP712DomainChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'agent',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalSlashableBalance',
                type: 'uint256',
            },
        ],
        name: 'GCAPayoutClaimed',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'proposalHash',
                type: 'bytes32',
            },
        ],
        name: 'ProposalHashUpdate',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'requirementsHash',
                type: 'bytes32',
            },
        ],
        name: 'RequirementsHashUpdated',
        type: 'event',
    },
    {
        inputs: [],
        name: 'BUCKET_DURATION',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'GENESIS_TIMESTAMP',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'GLOW_REWARDS_PER_BUCKET',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'GLOW_TOKEN',
        outputs: [
            { internalType: 'contract IGlow', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'GOVERNANCE',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'HOLDING_CONTRACT',
        outputs: [
            {
                internalType: 'contract IHoldingContract',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'OFFSET_LEFT',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'OFFSET_RIGHT',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'REWARDS_PER_SECOND_FOR_ALL',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'SHARES_REQUIRED_PER_COMP_PLAN',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'TOTAL_VESTING_PERIODS',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'USDC',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'allGcas',
        outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'uint256', name: '', type: 'uint256' },
        ],
        name: 'amountWithdrawnAtPaymentNonce',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
        ],
        name: 'bucket',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint64',
                        name: 'originalNonce',
                        type: 'uint64',
                    },
                    {
                        internalType: 'uint64',
                        name: 'lastUpdatedNonce',
                        type: 'uint64',
                    },
                    {
                        internalType: 'uint128',
                        name: 'finalizationTimestamp',
                        type: 'uint128',
                    },
                    {
                        components: [
                            {
                                internalType: 'uint128',
                                name: 'totalNewGCC',
                                type: 'uint128',
                            },
                            {
                                internalType: 'uint64',
                                name: 'totalGLWRewardsWeight',
                                type: 'uint64',
                            },
                            {
                                internalType: 'uint64',
                                name: 'totalGRCRewardsWeight',
                                type: 'uint64',
                            },
                            {
                                internalType: 'bytes32',
                                name: 'merkleRoot',
                                type: 'bytes32',
                            },
                            {
                                internalType: 'address',
                                name: 'proposingAgent',
                                type: 'address',
                            },
                        ],
                        internalType: 'struct IGCA.Report[]',
                        name: 'reports',
                        type: 'tuple[]',
                    },
                ],
                internalType: 'struct IGCA.Bucket',
                name: 'bucket',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
            { internalType: 'address', name: 'user', type: 'address' },
        ],
        name: 'bucketClaimBitmap',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
        ],
        name: 'bucketEndSubmissionTimestampNotReinstated',
        outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
        ],
        name: 'bucketFinalizationTimestampNotReinstated',
        outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
        ],
        name: 'bucketGlobalState',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint128',
                        name: 'totalNewGCC',
                        type: 'uint128',
                    },
                    {
                        internalType: 'uint64',
                        name: 'totalGLWRewardsWeight',
                        type: 'uint64',
                    },
                    {
                        internalType: 'uint64',
                        name: 'totalGRCRewardsWeight',
                        type: 'uint64',
                    },
                ],
                internalType: 'struct IGCA.BucketGlobalState',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
        ],
        name: 'bucketStartSubmissionTimestampNotReinstated',
        outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'claimGlowFromInflation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'user', type: 'address' },
            { internalType: 'uint256', name: 'paymentNonce', type: 'uint256' },
            {
                internalType: 'address[]',
                name: 'activeGCAsAtPaymentNonce',
                type: 'address[]',
            },
            { internalType: 'uint256', name: 'userIndex', type: 'uint256' },
            { internalType: 'bool', name: 'claimFromInflation', type: 'bool' },
            { internalType: 'bytes', name: 'sig', type: 'bytes' },
        ],
        name: 'claimPayout',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
            { internalType: 'uint256', name: 'glwWeight', type: 'uint256' },
            { internalType: 'uint256', name: 'usdcWeight', type: 'uint256' },
            { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
            { internalType: 'uint256', name: 'index', type: 'uint256' },
            { internalType: 'address', name: 'user', type: 'address' },
            { internalType: 'bool', name: 'claimFromInflation', type: 'bool' },
            { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        name: 'claimRewardFromBucket',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
            { internalType: 'uint256', name: 'glwWeight', type: 'uint256' },
            { internalType: 'uint256', name: 'usdcWeight', type: 'uint256' },
            { internalType: 'uint256', name: 'index', type: 'uint256' },
            { internalType: 'bool', name: 'claimFromInflation', type: 'bool' },
        ],
        name: 'createClaimRewardFromBucketDigest',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'relayer', type: 'address' },
            { internalType: 'uint256', name: 'paymentNonce', type: 'uint256' },
            { internalType: 'uint256', name: 'relayNonce', type: 'uint256' },
        ],
        name: 'createRelayDigest',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'currentBucket',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
        ],
        name: 'delayBucketFinalization',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
        name: 'donateToUSDCMinerRewardsPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
        name: 'donateToUSDCMinerRewardsPoolEarlyLiquidity',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'earlyLiquidity',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            { internalType: 'bytes1', name: 'fields', type: 'bytes1' },
            { internalType: 'string', name: 'name', type: 'string' },
            { internalType: 'string', name: 'version', type: 'string' },
            { internalType: 'uint256', name: 'chainId', type: 'uint256' },
            {
                internalType: 'address',
                name: 'verifyingContract',
                type: 'address',
            },
            { internalType: 'bytes32', name: 'salt', type: 'bytes32' },
            {
                internalType: 'uint256[]',
                name: 'extensions',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'gcasToSlash',
                type: 'address[]',
            },
            { internalType: 'address[]', name: 'newGCAs', type: 'address[]' },
            {
                internalType: 'uint256',
                name: 'proposalCreationTimestamp',
                type: 'uint256',
            },
        ],
        name: 'executeAgainstHash',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'gcaAgents',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'gca', type: 'address' }],
        name: 'gcaPayoutData',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint64',
                        name: 'lastClaimedTimestamp',
                        type: 'uint64',
                    },
                    {
                        internalType: 'uint64',
                        name: 'maxClaimTimestamp',
                        type: 'uint64',
                    },
                    {
                        internalType: 'uint128',
                        name: 'totalSlashableBalance',
                        type: 'uint128',
                    },
                ],
                internalType: 'struct IGCA.GCAPayout',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'gccContract',
        outputs: [{ internalType: 'contract IGCC', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getBucketTracker',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint48',
                        name: 'lastUpdatedBucket',
                        type: 'uint48',
                    },
                    {
                        internalType: 'uint48',
                        name: 'maxBucketId',
                        type: 'uint48',
                    },
                    {
                        internalType: 'uint48',
                        name: 'firstAddedBucketId',
                        type: 'uint48',
                    },
                ],
                internalType: 'struct BucketSubmission.BucketTracker',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'user', type: 'address' },
            { internalType: 'uint256', name: 'paymentNonce', type: 'uint256' },
            {
                internalType: 'address[]',
                name: 'activeGCAsAtPaymentNonce',
                type: 'address[]',
            },
            { internalType: 'uint256', name: 'userIndex', type: 'uint256' },
        ],
        name: 'getPayoutData',
        outputs: [
            {
                internalType: 'uint256',
                name: 'withdrawableAmount',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'slashableAmount',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'amountAlreadyWithdrawn',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'start', type: 'uint256' },
            { internalType: 'uint256', name: 'end', type: 'uint256' },
        ],
        name: 'getProposalHashes',
        outputs: [{ internalType: 'bytes32[]', name: '', type: 'bytes32[]' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getProposalHashes',
        outputs: [{ internalType: 'bytes32[]', name: '', type: 'bytes32[]' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
        ],
        name: 'handleMintToCarbonCreditAuction',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
        ],
        name: 'hasBucketBeenDelayed',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
        ],
        name: 'isBucketFinalized',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'isGCA',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'account', type: 'address' },
            { internalType: 'uint256', name: 'index', type: 'uint256' },
        ],
        name: 'isGCA',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'isSlashed',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'nextProposalIndexToUpdate',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'nextRelayNonce',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'paymentNonce',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'nonce', type: 'uint256' },
            { internalType: 'uint256', name: 'index', type: 'uint256' },
        ],
        name: 'paymentNonceToCompensationPlan',
        outputs: [{ internalType: 'uint32[5]', name: '', type: 'uint32[5]' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'nonce', type: 'uint256' }],
        name: 'paymentNonceToShiftStartTimestamp',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'nonce', type: 'uint256' }],
        name: 'payoutNonceToGCAHash',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'proposalHashes',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'bytes32', name: 'hash', type: 'bytes32' },
            { internalType: 'bool', name: 'incrementSlashNonce', type: 'bool' },
        ],
        name: 'pushHash',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'requirementsHash',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
        name: 'reward',
        outputs: [
            {
                components: [
                    {
                        internalType: 'bool',
                        name: 'inheritedFromLastWeek',
                        type: 'bool',
                    },
                    {
                        internalType: 'uint256',
                        name: 'amountInBucket',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'amountToDeduct',
                        type: 'uint256',
                    },
                ],
                internalType: 'struct BucketSubmission.WeeklyReward',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'gcc', type: 'address' }],
        name: 'setGCC',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_requirementsHash',
                type: 'bytes32',
            },
        ],
        name: 'setRequirementsHash',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'slashNonce',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'slashNonceToSlashTimestamp',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint32[5]', name: 'plan', type: 'uint32[5]' },
            { internalType: 'uint256', name: 'indexOfGCA', type: 'uint256' },
        ],
        name: 'submitCompensationPlan',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
            { internalType: 'uint256', name: 'totalNewGCC', type: 'uint256' },
            {
                internalType: 'uint256',
                name: 'totalGlwRewardsWeight',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'totalGRCRewardsWeight',
                type: 'uint256',
            },
            { internalType: 'bytes32', name: 'root', type: 'bytes32' },
        ],
        name: 'submitWeeklyReport',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'bucketId', type: 'uint256' },
            { internalType: 'uint256', name: 'totalNewGCC', type: 'uint256' },
            {
                internalType: 'uint256',
                name: 'totalGlwRewardsWeight',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'totalGRCRewardsWeight',
                type: 'uint256',
            },
            { internalType: 'bytes32', name: 'root', type: 'bytes32' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'submitWeeklyReportWithBytes',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
] as const
