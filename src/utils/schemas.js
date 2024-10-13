const z = require("zod");

const webs_schema = z.object({
  username: z.string({
    required_error: "username is required",
    invalid_type_error: "username must be a string",
  }),
  country: z.string({
    required_error: "country is required",
    invalid_type_error: "country must be a string",
  }),
  email: z.string().email({
    required_error: "email is required",
    invalid_type_error: "it must be a valid email",
  }),
  phone: z.string(),
  age: z.number().min(18, {
    message: "Age must be greater than 18",
  }),
  url: z.string().url({
    required_error: "url is required",
    invalid_type_error: "it must be a valid url",
  }),
  profession: z.string({
    required_error: "profession is required",
    invalid_type_error: "profession must be a string",
  }),
  search: z.string(),
  date: z.string(),
  time: z.string(),
  datetime: z.string(),
  range: z
    .number()
    .min(-10, {
      message: "range must be greater than 0",
    })
    .max(10, {
      message: "range must be less than 10",
    }),
});

function validateWeb(web) {
  return webs_schema.safeParse(web);
}

module.exports = {
  webs_schema,
  validateWeb,
};
