import { ID } from "../_metronic/helpers";

export interface Voucher {
  id: ID;
  user_id: string;
  employee_id: string;
  files: string;
  leave_date: string;
  return_date: string;
  leave_status: string;
}

export interface VoucherCreate {
  // user_id: string;
  employee_id: string;
  files: string;
  leave_date: string;
  return_date: string;
  leave_status: string;
}

export interface VoucherUpdate {
  employee_id: string;
  files: string;
  leave_date: string;
  return_date: string;
  leave_status: string;
}

export interface VoucherRead {
  id: ID;
  user_id: string;
  employee_id: string;
  files: string;
  leave_date: string;
  return_date: string;
  leave_status: string;
}

export const InitialValue: VoucherCreate = {
  // user_id: "",
  employee_id: "",
  files: "",
  leave_date: "",
  return_date: "",
  leave_status: "",
};
