import { InitialValue, Voucher, VoucherCreate, VoucherRead, VoucherUpdate } from "../../../models/voucher";

export type CreateModel = VoucherCreate;
export type ReadModel = VoucherRead;
export type UpdateModel = VoucherUpdate;
export type ListModel = Voucher;

export const initialVoucherModel: CreateModel = InitialValue;

export const Collection = "vouchers";

export const initialValueAddModel = { ...initialVoucherModel };
export const initialValueReadModel = { ...initialVoucherModel };
export const initialValueUpdateModel = { ...initialVoucherModel };
