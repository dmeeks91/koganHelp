export const FieldList = [
    {
        context: "person",
        fieldType: "radio",
        id: "sick",
        label:"What was the result of your test for Coronavirus?",
        options: [
          {value:"negative", label:"Negative"},
          {value:"positive", label:"Positive"}
        ]
    },
    {
      autoComplete: "fname",
      autoFocus: true,
      context: "person",
      fieldType:"input",
      fullWidth: true,
      id:"firstName",
      label: "First Name",
      required: true,
      type: "text",
      xs:6
    },
    {
      autoComplete: "lname",
      context: "person",
      fieldType:"input",
      fullWidth: true,
      id: "lastName",
      label: "Last Name",
      required: true,
      type: "text",
      xs:6
    },
    {
      autoComplete: "email",
      context: "user",
      fieldType:"input",
      fullWidth: true,
      id: "email",
      label: "Email Address",
      required: true,
      type: "email",
    },
    {
      autoComplete: "current-password",
      context: "user",
      fieldType:"input",
      fullWidth: true,
      id: "password",
      label: "Password",
      required: true,
      type: "password",
    },
    {
      context: "person",
      fieldType:"date",
      id: "dateOfBirth",
      label: "Please Enter Your Date Of Birth",
      required: true,
    },
    {
        context: "sex",
        fieldType: "radio",
        id: "sex",
        label:"Sex",
        options: [
          {value:"female", label:"Female"},
          {value:"male", label:"Male"},
          {value:"other", label:"Other"}
        ]
    },
    {
        context: "person",
        fieldType: "radio",
        id: "smoking",
        label:"Smoking History",
        options: [
          {value:"never", label:"Never Smoked"},
          {value:"current", label:"Currently Smoke"},
          {value:"former", label:"Used to Smoke"}
        ]
    }
]