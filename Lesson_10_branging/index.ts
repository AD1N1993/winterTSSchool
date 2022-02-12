import { ensureValidTransaction, Transaction, User, ValidTransaction } from './types';

function processTransaction(t: Transaction) {
    const validTransaction = ensureValidTransaction(t);
    console.log(validTransaction);
}

// declare var t: Transaction;
//
// const v: ValidTransaction = {
//     ...t,
//     __brand: 'ValidTransaction',
// };

declare var t: ValidTransaction;
declare function loadTransaction(id: Transaction['id']): Promise<ValidTransaction>;
declare function loadUser(id: User['id']): Promise<User>;

async function loadData(id: Transaction['id']) {
    const transaction = await loadTransaction(id);
    const user = await loadUser(transaction.authorId);

    return { transaction, user };
}

function toTransactionId(id: number): Transaction['id'] {
    return id as Transaction['id']

}

loadData(toTransactionId(5));
