/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category RemoveCollection
 * @category generated
 */
const removeCollectionStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */;
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'RemoveCollectionInstructionArgs',
);
/**
 * Accounts required by the _removeCollection_ instruction
 * @category Instructions
 * @category RemoveCollection
 * @category generated
 */
export type RemoveCollectionInstructionAccounts = {
  candyMachine: web3.PublicKey;
  authority: web3.PublicKey;
  collectionPda: web3.PublicKey;
  metadata: web3.PublicKey;
  mint: web3.PublicKey;
  collectionAuthorityRecord: web3.PublicKey;
  tokenMetadataProgram: web3.PublicKey;
};

const removeCollectionInstructionDiscriminator = [223, 52, 106, 217, 61, 220, 36, 160];

/**
 * Creates a _RemoveCollection_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 *
 * @category Instructions
 * @category RemoveCollection
 * @category generated
 */
export function createRemoveCollectionInstruction(accounts: RemoveCollectionInstructionAccounts) {
  const {
    candyMachine,
    authority,
    collectionPda,
    metadata,
    mint,
    collectionAuthorityRecord,
    tokenMetadataProgram,
  } = accounts;

  const [data] = removeCollectionStruct.serialize({
    instructionDiscriminator: removeCollectionInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: candyMachine,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: collectionPda,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: collectionAuthorityRecord,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('Cndy2utXYUAN62pVx82aTNGRSEq2HLfsDxZEKSbLqsHR'),
    keys,
    data,
  });
  return ix;
}
