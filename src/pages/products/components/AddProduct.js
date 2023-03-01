import React, { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { CustomSelect } from "../../../shared/components/CustomSelect";
import { CustomeInput } from "../../../shared/components/CustomeInput";
import { MenuItem, Select } from "@mui/material";

const AddProduct = () => {
  const { t } = useTranslation();

  // const formik = useFormik({
  //   initialValues: {
  //     upcCode: "",
  //     productName: "",
  //     category: "",
  //     unit: "",
  //     costPrice: "",
  //     wholesalePrice: "",
  //     retailsalePrice: "",
  //     discount: "",
  //     stockType: "",
  //     qntyperStock: "",
  //     quantity: "",
  //   },
  //   validationSchema: Yup.object({
  //     upcCode: Yup.string("Must be a string").required("*Required"),
  //     productName: Yup.string("Must be a string")
  //       .required("*Required")
  //       .min(6, "At least 6 characters long or greater"),
  //     category: Yup.string("Must be a string").required("*Required"),
  //     unit: Yup.string("Must be a string").required("*Required"),
  //     costPrice: Yup.number().required("*Required"),
  //     wholesalePrice: Yup.number("Must be a number").required("*Required"),
  //     retailsalePrice: Yup.number().required("*Required"),
  //     discount: Yup.number(),
  //     stockType: Yup.string("Must be a string").required("*Required"),
  //     qntyperStock: Yup.string("Must be a string").required("*Required"),
  //     quantity: Yup.string("Must be a string").required("*Required"),
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  const [unit_id, setUnitId] = useState("");
  const unitList = [
    { id: "0f1f67db-07f8-4e46-8cff-0f77cd7b025b", name: "ltr" },
    { id: "93dbe939-4e86-4adf-b514-ba8bc348c90d", name: "pcs" },
    { id: "dc3a4b3b-8381-4a00-9545-5455450ba110", name: "kg" },
  ];
  const categoryList = [
    { id: "1aa8177f-cc8f-46b5-b08b-6813d3cb5bba", name: "stationary" },
    { id: "59242950-1fc1-44dc-a9b0-cc53d9b6e873", name: "snacks" },
    { id: "ae8b70f8-d0ed-4efd-8fa1-aac61d8232e2", name: "grocery items" },
    { id: "f1b98046-d2f2-44d6-bcf6-78cfc8ddd0c3", name: "cosmetics" },
  ];
  const stockTypeList = [
    { id: "70968e3d-5f28-4892-8369-b37efeb6738e", name: "bori" },
    { id: "82498feb-dcdd-4f32-894d-0d28481ebe04", name: "case" },
  ];
  const handleChange = (event) => {
    console.log(event.target.value);
    setUnitId(event.target.value);
  };
  return (
    <div className="flex flex-col gap-5 mb-10">
      <div className="flex gap-5 text-xl font-medium items-center">
        <ArrowCircleLeftIcon />
        {t("ADD_PRODUCT")}
      </div>
      <div className="rounded-lg bg-white p-5 flex flex-col gap-5">
        <Formik
          initialValues={{
            upcCode: "",
            productName: "",
            category: "",
            unit: "",
            costPrice: "",
            wholesalePrice: "",
            retailsalePrice: "",
            discount: "",
            stockType: "",
            qntyperStock: "",
            quantity: "",
          }}
          validationSchema={Yup.object({
            upcCode: Yup.string("Must be a string").required("*Required"),
            productName: Yup.string("Must be a string")
              .required("*Required")
              .min(6, "At least 6 characters long or greater"),
            category: Yup.string("Must be a string").required("*Required"),
            unit: Yup.string("Must be a string").required("*Required"),
            costPrice: Yup.number().required("*Required"),
            wholesalePrice:
              Yup.number("Must be a number").required("*Required"),
            retailsalePrice: Yup.number().required("*Required"),
            discount: Yup.number(),
            stockType: Yup.string("Must be a string").required("*Required"),
            qntyperStock: Yup.string("Must be a string").required("*Required"),
            quantity: Yup.string("Must be a string").required("*Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <div className="form-item flex flex-col gap-2">
                {/* <label htmlFor="upcCode">{t("UPC_CODE")}</label>
            <input
              className="h-10 border border-input-border outline-none px-5 rounded-md"
              id="upcCode"
              name="upcCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.upcCode}
              placeholder={t("ENTER_UPC_CODE")}
            />
            {formik.touched.upcCode &&
              (formik.errors.upcCode ? (
                <div className="error-hint">{formik.errors.upcCode}</div>
              ) : null)} */}
                <CustomeInput
                  label={t("UPC_CODE")}
                  name="upcCode"
                  type="text"
                  placeholder={t("ENTER_UPC_CODE")}
                />
              </div>
              <div className="form-item flex flex-col gap-2">
                {/* <label htmlFor="upcCode">{t("PRODUCT_NAME")}</label>
            <input
              className="h-10 border border-input-border outline-none px-5 rounded-md"
              id="upcCode"
              name="upcCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.upcCode}
              placeholder={t("PRODUCT_NAME")}
            />
            {formik.touched.upcCode &&
              (formik.errors.upcCode ? (
                <div className="error-hint">{formik.errors.upcCode}</div>
              ) : null)} */}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <div className="form-item flex flex-col gap-2">
                {/* <label htmlFor="upcCode">{t("UNIT")}</label>
            <CustomSelect
              list={unitList}
              placeholder={t("SELECT_UNIT")}
              selectedValue={unit_id}
              handleChange={handleChange}
              name="unit"
            /> */}
                <CustomSelect label={t("UNIT")} name="unit">
                  <MenuItem value="" disabled>
                    {t("SELECT_UNIT")}
                  </MenuItem>
                  {unitList.map((item) => {
                    return <MenuItem value={item.id}>{item.name}</MenuItem>;
                  })}
                </CustomSelect>
              </div>
              <div className="form-item flex flex-col gap-2">
                {/* <label htmlFor="upcCode">{t("CATEGORY")}</label> */}
                {/* <CustomSelect
              list={categoryList}
              placeholder={t("SELECT_CATEGORY")}
              selectedValue={unit_id}
              handleChange={handleChange}
              name="category"
            /> */}
                <CustomSelect label={t("CATEGORY")} name="category">
                  <option value="" disabled>
                    {t("SELECT_CATEGORY")}
                  </option>
                  {categoryList.map((item) => {
                    return <option value={item.id}>{item.name}</option>;
                  })}
                </CustomSelect>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <div className="form-item flex flex-col gap-2">
                {/* <label htmlFor="upcCode">{t("COST_PRICE")}</label>
            <input
              className="h-10 border border-input-border outline-none px-5 rounded-md"
              id="upcCode"
              name="upcCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.upcCode}
              placeholder={t("ENTER_COST_PRICE")}
            />
            {formik.touched.upcCode &&
              (formik.errors.upcCode ? (
                <div className="error-hint">{formik.errors.upcCode}</div>
              ) : null)} */}
              </div>
              <div className="form-item flex flex-col gap-2">
                {/* <label htmlFor="upcCode">{t("WHOLESALE_PRICE")}</label>
            <input
              className="h-10 border border-input-border outline-none px-5 rounded-md"
              id="upcCode"
              name="upcCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.upcCode}
              placeholder={t("ENTER_WHOLESALE_PRICE")}
            />
            {formik.touched.upcCode &&
              (formik.errors.upcCode ? (
                <div className="error-hint">{formik.errors.upcCode}</div>
              ) : null)} */}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <div className="form-item flex flex-col gap-2">
                {/* <label htmlFor="upcCode">{t("RETAILSALE")}</label>
            <input
              className="h-10 border border-input-border outline-none px-5 rounded-md"
              id="upcCode"
              name="upcCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.upcCode}
              placeholder={t("ENTER_RETAILSALE_PRICE")}
            />
            {formik.touched.upcCode &&
              (formik.errors.upcCode ? (
                <div className="error-hint">{formik.errors.upcCode}</div>
              ) : null)} */}
              </div>
              <div className="form-item flex flex-col gap-2">
                {/* <label htmlFor="upcCode">{t("DISCOUNT")}</label>
            <input
              className="h-10 border border-input-border outline-none px-5 rounded-md"
              id="upcCode"
              name="upcCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.upcCode}
              placeholder={t("ENTER_DISCOUNT_PERCENTAGE")}
            />
            {formik.touched.upcCode &&
              (formik.errors.upcCode ? (
                <div className="error-hint">{formik.errors.upcCode}</div>
              ) : null)} */}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <div className="form-item flex flex-col gap-2">
                {/* <label htmlFor="upcCode">{t("STOCK_TYPE")}</label>
            <input
              className="h-10 border border-input-border outline-none px-5 rounded-md"
              id="upcCode"
              name="upcCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.upcCode}
              placeholder={t("ENTER_BULK_STOCK_TYPE")}
            />
            {formik.touched.upcCode &&
              (formik.errors.upcCode ? (
                <div className="error-hint">{formik.errors.upcCode}</div>
              ) : null)} */}
              </div>
              <div className="form-item flex flex-col gap-2">
                {/* <label htmlFor="upcCode">{t("QTY_STOCK_TYPE")}</label>
            <input
              className="h-10 border border-input-border outline-none px-5 rounded-md"
              id="upcCode"
              name="upcCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.upcCode}
              placeholder={t("ENTER_QTY_PER_BULK_STOCK_TYPE")}
            />
            {formik.touched.upcCode &&
              (formik.errors.upcCode ? (
                <div className="error-hint">{formik.errors.upcCode}</div>
              ) : null)} */}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <div className="form-item flex flex-col gap-2">
                {/* <label htmlFor="upcCode">{t("QUANTITY")}</label>
            <input
              className="h-10 border border-input-border outline-none px-5 rounded-md"
              id="upcCode"
              name="upcCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.upcCode}
              placeholder={t("ENTER_QTY")}
            />
            {formik.touched.upcCode &&
              (formik.errors.upcCode ? (
                <div className="error-hint">{formik.errors.upcCode}</div>
              ) : null)} */}
              </div>
              <div className="form-item flex flex-col gap-2">
                {/* <label htmlFor="upcCode">{t("BULK_QUNATITY")}</label>
            <input
              className="h-10 border border-input-border outline-none px-5 rounded-md"
              id="upcCode"
              name="upcCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.upcCode}
              placeholder={t("ENTER_BULK_QTY")}
            />
            {formik.touched.upcCode &&
              (formik.errors.upcCode ? (
                <div className="error-hint">{formik.errors.upcCode}</div>
              ) : null)} */}
              </div>
            </div>
          </Form>
        </Formik>

        <div className="flex w-full gap-10 justify-center mt-5">
          <button className="border w-36 py-2 rounded-lg">{t("CANCLE")}</button>
          <button className="border w-36 py-2 rounded-lg" type="submit">
            {t("ADD")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
