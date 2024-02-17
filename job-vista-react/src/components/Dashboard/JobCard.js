import React from 'react'

export default function JobCard() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        {/* Trupti */}

        <div class="container mt-5">

          <table class="table table-bordered-rounded  table-rounded shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" class="text-center">Jobs</th>
                <th scope="col" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td class="text-center">Mark Otto</td>
                <td class="text-center">
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-primary">Job Details</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td class="text-center">Jacob Thornton</td>
                <td class="text-center">
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-primary">Job Details</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td class="text-center">Larry the Bird</td>
                <td class="text-center">
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-primary">Job Details</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>


        </div>
      </div>
    </div>
  )
}
