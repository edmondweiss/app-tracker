import { FieldInputProps } from "formik/dist/types";
import { FieldMetaProps } from "formik";

export type FormikRenderProp<T> = {
  field: FieldInputProps<T>;
  form: any;
  meta: FieldMetaProps<T>;
};
