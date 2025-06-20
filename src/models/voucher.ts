import { ID } from "../_metronic/helpers";

export interface Voucher {
  id: ID;
  voucher_code: string;
  discount_percent: string;
  expiry_date: string;
  created_at: string;
  updated_at: string;
  file: string;
}

export interface VoucherCreate {
  voucher_code: string;
  discount_percent: number;
  expiry_date: string;
  file: string;
}

export interface VoucherUpdate {
  voucher_code: string;
  discount_percent: number;
  expiry_date: string;
  file: string;
}

export interface VoucherRead {
  id: ID;
  voucher_code: string;
  discount_percent: string;
  expiry_date: string;
  created_at: string;
  updated_at: string;
  file: string;
}

export const InitialValue: VoucherCreate = {
  voucher_code: "",
  discount_percent: 0,
  expiry_date: "",
  file:"",
};
