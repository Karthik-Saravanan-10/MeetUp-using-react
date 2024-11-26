import style from "../pages/MeetupForm.module.css";
import MeetupForm from "../pages/MeetupForm";
import "../data";
import { Form, redirect } from "react-router-dom";

function Meet() {
  
  return (
    <>
      {/* {onSubmit={(event) => event?.target?.reset()}} */}
      <MeetupForm>
        <h2>Add New Meetup</h2>
        <Form className={style.card} method="post">
          <div className={style.control}>
            <label htmlFor="m-title">Meetup title</label>
            <input type="text" name="meetTitle" id="m-title" required />
          </div>
          <div className={style.control}>
            <label htmlFor="m-image">Meetup Image</label>
            <input type="text" name="meetImage" id="m-image" required />
          </div>
          <div className={style.control}>
            <label htmlFor="m-address">Address</label>
            <input type="text" name="meetAddress" id="m-address" required />
          </div>
          <div className={style.control}>
            <label htmlFor="m-textarea">Description</label>
            <textarea name="meetDetail" id="m-textarea" rows={6} required />
          </div>
          <div className={style.actions}>
            <button>Add Meetup</button>
          </div>
        </Form>
      </MeetupForm>
    </>
  );
}

export const dataSender = async ({ request }) => {
  let data = await request.formData();
  let entries = Object.fromEntries(data);
  console.log(data);
  await fetch(
    "https://react-meet-5924c-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json",
    {
      method: "POST",
      body: JSON.stringify(entries),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // document.form.reset()

  return redirect("/");
};

export default Meet;
