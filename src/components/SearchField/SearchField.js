import React from "react";
import PropTypes from "prop-types";
import { Form } from "./styles";
import { CiSearch } from "react-icons/ci";

const SearchField = ({ inputText, onChange, onSearch }) => {
  return (
    <Form onSubmit={onSearch}>
      <input
        type="text"
        label="search"
        value={inputText}
        onChange={onChange}
        aria-label="input"
        placeholder="Search your favorite dev"
      />
      <button aria-label="search">
        <CiSearch />
      </button>
    </Form>
  );
};

SearchField.propTypes = {
  inputText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchField;
