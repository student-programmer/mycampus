"use client";
import { Button, Input } from "antd";
import React, { useEffect } from "react";
import { useFormik } from "formik";

import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import { ErrorComponent } from "@/fsd/features/auth/ui/ErrorComponent";
import style from "./FilterForConnects.module.scss";
import ModalComponent from "@/fsd/shared/ui/Modal/ModalComponent";
import { CustomSelect } from "@/fsd/features/auth/ui/CustomSelect";
import { CustomMultipleSelect } from "@/fsd/features/auth/ui/CustomMultipuleSelect";
import useUrlSearchParams from "@/fsd/shared/helpers/urlHelpers/useUrlSearchParams";
import { usePlacesStore } from "@/fsd/app/stores/places/store";

const FilterForPlaces = ({ resetFilters }: { resetFilters: () => void }) => {
  const {
    placesKeyWords,
    placesCategories,
    fetchPlacesCategories,
    fetchPlacesKeyWords,
    setFilteredPlacesParams,
  } = usePlacesStore();

  useEffect(() => {
    fetchPlacesCategories();
    fetchPlacesKeyWords();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      keywords: [],
      category: [],
    },
    onSubmit: (values) => {
      setFilteredPlacesParams(values);
    },
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const resetFiltersForm = () => {
    resetFilters();
    formik.resetForm();
  };

  return (
    <ModalComponent
      title="Filters"
      className={style}
      showModalEmit={() => resetFilters()}
      footerArray={[
        <Button key="reset" onClick={() => resetFiltersForm()}>
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
            id={"name"}
            name={"name"}
            className={l.input_field}
            value={formik.values.name}
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldError("name", undefined);
            }}
            status={!!formik.errors.name ? "error" : undefined}
            placeholder="Search by name..."
          />
          {formik.errors.name && (
            <ErrorComponent message={formik.errors.name} />
          )}
        </div>
        <div>
          <label htmlFor="keywords" className={l.label}>
            Keywords
          </label>

          <CustomMultipleSelect
            id={"keywords"}
            status={!!formik.errors.keywords ? "error" : undefined}
            placeholder="Enter your keywords..."
            onChange={(e) => {
              const selectedNames = Array.isArray(e) ? e : [e];
              formik.setFieldValue("keywords", selectedNames);
              formik.setFieldError("keywords", undefined);
            }}
            option={placesKeyWords.map((item) => ({
              value: item,
              label: item,
            }))}
          />

          {formik.errors.keywords && (
            <ErrorComponent message={formik.errors.keywords} />
          )}
        </div>
        <div>
          <label htmlFor="category" className={l.label}>
            Category
          </label>

          <CustomMultipleSelect
            id={"category"}
            status={!!formik.errors.category ? "error" : undefined}
            placeholder="Enter your category..."
            onChange={(e) => {
              const selectedNames = Array.isArray(e) ? e : [e];
              formik.setFieldValue("category", selectedNames);
              formik.setFieldError("category", undefined);
            }}
            option={placesCategories.map((item) => ({
              value: item,
              label: item,
            }))}
          />

          {formik.errors.category && (
            <ErrorComponent message={formik.errors.category} />
          )}
        </div>
      </div>
    </ModalComponent>
  );
};

export default FilterForPlaces;
