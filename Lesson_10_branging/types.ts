type Branded<T extends { id: unknown }> = T & {
    id: T['id'] & { __brand: T };
};

export type User = Branded<{
    id: number;
    login: string;
}>;

export type WalletId = number;

export interface TransactionOperation {
    amount: bigint;
    walletId: number;
}

export type Transaction = Branded<{
    id: number;
    authorId: User['id'];
    inputs: TransactionOperation[];
    outputs: TransactionOperation[];
}>;

const validTransactionBrand: unique symbol = Symbol();

export interface ValidTransaction extends Transaction {
    [validTransactionBrand]: typeof validTransactionBrand;
}

export function ensureValidTransaction(t: Transaction): ValidTransaction {
    const amountToWithDraw = t.inputs.reduce((sum, op) => sum + op.amount, 0n);
    const amountToDeposit = t.inputs.reduce((sum, op) => sum + op.amount, 0n);

    if (amountToDeposit !== amountToWithDraw) {
        throw new Error('Invalid transaction');
    }

    return {
        ...t,
        [validTransactionBrand]: validTransactionBrand,
    };
}
