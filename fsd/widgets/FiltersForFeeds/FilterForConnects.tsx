"use client";
import { Button, Input } from "antd";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDictStore } from "@/fsd/app/stores/dict/store";
import { SignUpSchema } from "@/schemas/signIn";

import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import { ErrorComponent } from "@/fsd/features/auth/ui/ErrorComponent";
import style from "./FilterForConnects.module.scss";
import ModalComponent from "@/fsd/shared/ui/Modal/ModalComponent";
import { CustomSelect } from "@/fsd/features/auth/ui/CustomSelect";
import { CustomMultipleSelect } from "@/fsd/features/auth/ui/CustomMultipuleSelect";
import useUrlSearchParams from "@/fsd/shared/helpers/urlHelpers/useUrlSearchParams";
import { useProfilesStore } from "@/fsd/app/stores/profiles/store";

const FilterForConnects = () => {
  const {
    LanguageList,
    UniversityList,
    InterestsList,
    StudyDirectionsList,
    CountryList,
    fetchUniversities,
    fetchInterests,
    fetchLanguages,
    fetchStudyDirections,
    fetchCountries,
  } = useDictStore();

  const { fetchProfilesByParams, profileList } = useProfilesStore();

  const { params, getParam, setParam, searchParams, deleteAllParams } =
    useUrlSearchParams();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      birthDate1: "",
      sex: "",
      languages: [],
      interests: [],
      location: "",
      university: "",
    },
    onSubmit: (values) => {
      Object.entries(values).forEach(([key, value]) => {
        if (value && value.length > 0) {
          if (Array.isArray(value)) {
            setParam(key, value.join(","));
          } else {
            setParam(key, value.toString());
          }
        }
      });
    },
  });

  useEffect(() => {
    console.log(params)
    fetchProfilesByParams(params)
  }, [params])

/*   const callBackWhenOpenModal = () => {
    deleteAllParams()
    formik.resetForm()
  }
 */

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const sex = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "", label: "All" },
  ];

  const resetFilters = () => {
    deleteAllParams()
    formik.resetForm()
  }

  useEffect(() => {
    fetchUniversities();
    fetchInterests();
    fetchLanguages();
    fetchStudyDirections();
    fetchCountries();
  }, []);

  return (
    <>
    {/* <button onClick={() => deleteAllParams()}>Delete all params</button> */}
    <ModalComponent
      title="Filters"
      buttonText="Filters"
      showModalEmit={() => resetFilters()}
      footerArray={[
        <Button key="reset" onClick={resetFilters}>
          Reset Filters
        </Button>,
      ]}
      handleOkEmit={handleSubmit}
    >
      <div className={style.filterForConnectsWrapper}>
        <div>
          <label htmlFor="firstName" className={l.label}>
            First name
          </label>
          <Input
            id={"firstName"}
            name={"firstName"}
            className={l.input_field}
            value={formik.values.firstName}
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldError("firstName", undefined);
            }}
            status={!!formik.errors.firstName ? "error" : undefined}
            placeholder="Search by name..."
          />
          {formik.errors.firstName && (
            <ErrorComponent message={formik.errors.firstName} />
          )}
        </div>
      </div>
      <div>
        <label htmlFor="lastName" className={l.label}>
          Last name
        </label>
        <Input
          id={"lastName"}
          name={"lastName"}
          className={l.input_field}
          value={formik.values.lastName}
          onChange={(e) => {
            formik.handleChange(e);
            formik.setFieldError("lastName", undefined);
          }}
          status={!!formik.errors.lastName ? "error" : undefined}
          placeholder="Search by Last name..."
        />
        {formik.errors.lastName && (
          <ErrorComponent message={formik.errors.lastName} />
        )}
      </div>
      <div>
        <label htmlFor="birthDate" className={l.label}>
          Years start from...
        </label>
        <Input
          id={"birthDate"}
          name={"birthDate"}
          className={l.input_field}
          value={formik.values.birthDate}
          onChange={(e) => {
            formik.handleChange(e);
            formik.setFieldError("birthDate", undefined);
          }}
          status={!!formik.errors.birthDate ? "error" : undefined}
          placeholder="Years start from..."
        />
        {formik.errors.birthDate && (
          <ErrorComponent message={formik.errors.birthDate} />
        )}
      </div>
      <div>
        <label htmlFor="birthDate1" className={l.label}>
          Years end with...
        </label>
        <Input
          id={"birthDate1"}
          name={"birthDate1"}
          className={l.input_field}
          value={formik.values.birthDate1}
          onChange={(e) => {
            formik.handleChange(e);
            formik.setFieldError("birthDate", undefined);
          }}
          status={!!formik.errors.birthDate ? "error" : undefined}
          placeholder="Years end with..."
        />
        {formik.errors.birthDate && (
          <ErrorComponent message={formik.errors.birthDate} />
        )}
      </div>
      <div>
        <label htmlFor="sex" className={l.label}>
          Sex
        </label>
        <CustomSelect
          id={"sex"}
          placeholder="Enter your sex..."
          status={!!formik.errors.sex ? "error" : undefined}
          onChange={(e) => {
            formik.setFieldValue("sex", e);
            formik.setFieldError("sex", undefined);
          }}
          options={sex}
        />
        {formik.errors.sex && <ErrorComponent message={formik.errors.sex} />}
      </div>
      <div>
        <label htmlFor="languages" className={l.label}>
          Languages
        </label>

        <CustomMultipleSelect
          id={"languages"}
          status={!!formik.errors.languages ? "error" : undefined}
          placeholder="Enter your languages..."
          onChange={(e) => {
            const selectedNames = Array.isArray(e) ? e : [e];
            formik.setFieldValue("languages", selectedNames);
            formik.setFieldError("languages", undefined);
          }}
          option={LanguageList.map((item) => ({
            value: item.name,
            label: item.name,
          }))}
        />

        {formik.errors.languages && (
          <ErrorComponent message={formik.errors.languages} />
        )}
      </div>
      <div>
        <label htmlFor="interests" className={l.label}>
          Interests
        </label>
        <CustomMultipleSelect
          id={"interests"}
          status={!!formik.errors.interests ? "error" : undefined}
          placeholder="Enter your interests..."
          onChange={(e) => {
            const selectedNames = Array.isArray(e) ? e : [e];
            formik.setFieldValue("interests", selectedNames);
            formik.setFieldError("interests", undefined);
          }}
          option={InterestsList.map((item) => ({
            value: item.name,
            label: item.name,
          }))}
        />
        {formik.errors.interests && (
          <ErrorComponent message={formik.errors.interests} />
        )}
      </div>
      <div>
        <label htmlFor="university" className={l.label}>
          University
        </label>
        <div>
          <CustomSelect
            id={"university"}
            placeholder="Enter your university..."
            status={!!formik.errors.university ? "error" : undefined}
            onChange={(e) => {
              formik.setFieldValue("university", parseInt(e.toString()));
              formik.setFieldError("university", undefined);
            }}
            options={UniversityList.map((item) => ({
              value: item.name,
              label: item.name,
            }))}
          />
        </div>
        {formik.errors.university && (
          <ErrorComponent message={formik.errors.university} />
        )}
      </div>
    </ModalComponent>
    </>
  );
};

export default FilterForConnects;
