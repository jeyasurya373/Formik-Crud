import { Formik } from "formik";

function FormikApp() {
    return (<Formik
        initialValues={{
            Id: "",
            UserId: "",
            Title: "",
            Body: ""
        }}

        validate={(values) => {
            const errors = {};
            if (!values.UserId) {
                errors.UserId = "userid is Empty"
            } else if (!values.Id) {
                errors.Id = "Id is Empty"

            } else if (!values.Title) {
                errors.Title = "Tittle is Empty"
            } else if (!values.Body) {
                errors.Body = "Body is Empty"
            }
            return errors;
        }}
        onSubmit={() => {
            console.log("submitting")
        }}

    >
        {({ values, touched, errors, handleBlur, handleSubmit, handleChange }) => {
            return (
                <form onSubmit={handleSubmit}>
                    <label>UserId:</label>
                    <input type="number" name="UserId" value={values.UserId} onChange={handleChange} onBlur={handleBlur} />
                    {errors.UserId && touched ? (
                        <span className="wrong">{errors.UserId}</span>
                    ) : (
                        "")
                    }


                    <label>Id:</label>
                    <input type="number" name="Id" value={values.Id} onChange={handleChange} onBlur={handleBlur} />
                    {errors.Id && touched ? (
                        <span className="wrong">{errors.Id}</span>
                    ) : (
                        "")
                    }


                    <label>Title:</label>
                    <input type="text" name="Title" value={values.Title} onChange={handleChange} onBlur={handleBlur} />
                    {errors.Title && touched ? (
                        <span className="wrong">{errors.Title}</span>
                    ) : (
                        "")
                    }


                    <label>Body:</label>
                    <input type="text" name="Body" value={values.Body} onChange={handleChange} onBlur={handleBlur} />
                    {errors.Body && touched ? (
                        <span className="wrong">{errors.Body}</span>
                    ) : (
                        "")
                    }

                    <input type="submit" />
                </form>

            )
        }}


    </Formik>)
}


export default FormikApp;

