"use client";
import { Button, Input, DatePicker, InputNumber, Select } from "antd";
import React from "react";
import { useFormik } from "formik";
import dayjs from "dayjs";

import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import style from "./FilterForConnects.module.scss";
import ModalComponent from "@/fsd/shared/ui/Modal/ModalComponent";
import { useEventsStore } from "@/fsd/app/stores/events/store";
import { CustomSelect } from "@/fsd/features/auth/ui/CustomSelect";

interface FiltersForEventsProps {
  resetFilters: () => void;
}

const FilterForEvents = ({ resetFilters }: FiltersForEventsProps) => {
  const { setFilteredEventsParams } = useEventsStore();

  const formik = useFormik({
    initialValues: {
      minPrice: "",
      maxPrice: "",
      date: null,
      category: "",
      name: "",
    },
    onSubmit: (values) => {
      setFilteredEventsParams({
        minPrice: values.minPrice,
        maxPrice: values.maxPrice,
        date: values.date ? dayjs(values.date).format("YYYY-MM-DD") : "",
        category: values.category,
        name: values.name,
      });
    },
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const resetFiltersForm = () => {
    resetFilters();
    formik.resetForm();
  };

  const categories = ["Festival", "Market", "Movie", "Exhibition"];

  return (
    <ModalComponent
      title="Filters"
      buttonText="Filters"
      showModalEmit={() => resetFilters()}
      footerArray={[
        <Button key="reset" onClick={resetFiltersForm}>
          Reset Filters
        </Button>,
      ]}
      handleOkEmit={handleSubmit}
    >
      <div className={style.filterForConnectsWrapper}>
        <div>
          <label htmlFor="name" className={l.label}>
            Name
          </label>
          <Input
            id="name"
            name="name"
            className={l.input_field}
            value={formik.values.name}
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldError("name", undefined);
            }}
            placeholder="Search by name"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label htmlFor="minPrice" className={l.label}>
            Min Price
          </label>
          <Input
            id="minPrice"
            name="minPrice"
            className={l.input_field}
            value={formik.values.minPrice}
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldError("minPrice", undefined);
            }}
            placeholder="Min price"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label htmlFor="maxPrice" className={l.label}>
            Max Price
          </label>
          <Input
            id="maxPrice"
            name="maxPrice"
            className={l.input_field}
            value={formik.values.maxPrice}
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldError("maxPrice", undefined);
            }}
            placeholder="Max price"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label htmlFor="category" className={l.label}>
            Category
          </label>
          <CustomSelect
            id="category"
            className={l.input_field}
            value={formik.values.category}
            onChange={(value) => formik.setFieldValue("category", value)}
            options={categories.map((category) => ({
              value: category,
              label: category,
            }))}
            placeholder="Select category"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </ModalComponent>
  );
};

export default FilterForEvents;
