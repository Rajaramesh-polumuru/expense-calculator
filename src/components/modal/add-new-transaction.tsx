import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FormGroup, TextField } from "@mui/material";
import { ModalBox, Title, Form, Label, ErrorText } from "./styled-components";
import { format } from "date-fns";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import { DateField } from "@mui/x-date-pickers/DateField";
import { ModalComponentProps, FormData, FormErrors } from "./types";

const ModalComponent: React.FC<ModalComponentProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    description: "",
    amount: "",
    date: format(new Date(), "yyyy-MM-dd"),
    category: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    description: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Perform form validation
    const { description, amount, date, category } = formData;
    const newErrors: FormErrors = {
      description: "",
      amount: "",
      date: "",
      category: "",
    };

    if (description.trim() === "") {
      newErrors.description = "Description is required";
    }

    if (amount.trim() === "") {
      newErrors.amount = "Amount is required";
    } else if (isNaN(Number(amount))) {
      newErrors.amount = "Amount must be a valid number";
    }

    if (date.trim() === "") {
      newErrors.date = "Date is required";
    }

    if (category.trim() === "") {
      newErrors.category = "Category is required";
    }

    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
    } else {
      // Submit the form or perform further actions
      console.log("Form submitted:", formData);

      // Reset form data and errors
      setFormData({
        description: "",
        amount: "",
        date: format(new Date(), "yyyy-MM-dd"), // Reset date to today
        category: "",
      });
      setErrors({
        description: "",
        amount: "",
        date: "",
        category: "",
      });

      // Close the modal
      onClose();
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <Title variant="h6">Add New Transaction</Title>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <TextField
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                margin="dense"
              />
              {errors.description && (
                <ErrorText>{errors.description}</ErrorText>
              )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="amount">Amount (in Rupees)</Label>
              <TextField
                type="text"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                margin="dense"
              />
              {errors.amount && <ErrorText>{errors.amount}</ErrorText>}
            </FormGroup>
            <FormGroup>
            <Label htmlFor="date">Date</Label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateField label="Basic date field" />
              {/* <DatePicker
                  label="Select Date"
                  inputFormat="yyyy-MM-dd"
                  value={formData.date}
                  onChange={(newValue: any) => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      date: newValue,
                    }));
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      variant="outlined"
                      margin="dense"
                    />
                  )}
                /> */}
            </LocalizationProvider>
            {errors.date && <ErrorText>{errors.date}</ErrorText>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="category">Category</Label>
              <TextField
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                margin="dense"
              />
              {errors.category && <ErrorText>{errors.category}</ErrorText>}
            </FormGroup>
            <Button type="submit" variant="contained">
              Add Transaction
            </Button>
          </Form>
        </ModalBox>
      </Modal>
    </>
  );
};

export default ModalComponent;
