export default function WhatInfo() {
  return (
    <section id="data" class="dark">
      <div class="wrap">
        <hr class="rule" />
        <h2>What information goes into the system</h2>
        <p>
          To match requests with listings, the app collects the details below.
          This is what each side provides and who can see it.
        </p>
        <div class="tw">
          <table>
            <thead>
              <tr>
                <th>Who</th>
                <th>Information</th>
                <th>Who sees it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Buyer (request)</td>
                <td>
                  Part wanted, car make, model and year, notes, area, phone
                  number
                </td>
                <td>Sellers who reply</td>
              </tr>
              <tr>
                <td>Seller (listing)</td>
                <td>Part name, photos, condition, price, area, phone number</td>
                <td>All app users</td>
              </tr>
              <tr>
                <td>Everyone</td>
                <td>Name, email, password and account settings</td>
                <td>Only you and Ksmarting Auto</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Requests and listings are matched by part name and car details, so the
          more complete they are, the faster you get a match.
        </p>
      </div>
    </section>
  );
}
