import React, { useEffect } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GET, POST } from "../../../services/http.service";
import { API_ENDPOINTS } from "../../../constansts/api-endpoints";
import { Link } from "react-router-dom";
async function makeApiCall() {
  try {
    const res = await GET(API_ENDPOINTS.LIST.CATEGORY, {});
    return res;
  } catch (err) {
    return err;
  }
}
export const AddSupplier = () => {
  console.log("addsupplier==============>");
  useEffect(() => {
    console.log("making api reques");
    // GET(API_ENDPOINTS.LIST.CATEGORY, {})
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    makeApiCall().then((res) => console.log(res));
  }, []);
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("NAME_REQUIRED")),
      phone: Yup.string()
        .length(10, t("PHONE_MUST_BE_10_DIGITS"))
        .required(t("PHONE_REQUIRED"))
        .matches(/^[6-9]{1}[0-9]{9}$/, t("VALID_PHONE_NUMBER")),
      address: Yup.string().required(t("ADDRESS_REQUIRED")),
    }),
    onSubmit: async (values) => {
      try {
        console.log(values);
        values.phone = String(values.phone);
        const res = await POST(API_ENDPOINTS.SUPPLIER.ADD, values);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 items-center">
        <ArrowCircleLeftIcon className="cursor-pointer" />
        <span className="text-xl font-semibold">{t("ADD_SUPPLIER")}</span>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white rounded-lg shadow-md flex flex-col gap-5 px-5 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="form-item flex flex-col gap-2">
              <div>{t("SUPPLIER_NAME")}</div>
              <input
                type="text"
                placeholder={t("ENTER_SUPPLIER_NAME")}
                className="w-full outline-none border border-input-border h-10 rounded-md px-5"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error-hint">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-item flex flex-col gap-2">
              <div>{t("MOBILE_NUMBER")}</div>
              <input
                type="number"
                placeholder={t("ENTER_MOBILE_NUBMER")}
                className="w-full outline-none border border-input-border h-10 rounded-md px-5"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="error-hint">{formik.errors.phone}</div>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="form-item flex flex-col gap-2">
              <div>{t("ADDRESS")}</div>
              <input
                type="text"
                placeholder={t("ENTER_ADDRESS")}
                className="w-full outline-none border border-input-border h-10 rounded-md px-5"
                {...formik.getFieldProps("address")}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="error-hint">{formik.errors.address}</div>
              ) : null}
            </div>
          </div>
          <div className="flex gap-10 justify-center mt-5">
            <Link to="../list">
              <button className="h-10 w-36 border border-blue rounded-lg hover:bg-blue hover:text-white">
                {t("CANCEL")}
              </button>
            </Link>
            <Link to="../list">
              <button
                className="h-10 w-36 border border-blue rounded-lg hover:bg-blue hover:text-white"
                type="submit"
              >
                {t("SAVE")}
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
    // <div className="">
    //   fjlkdajfla
    // </div>
  );
};
