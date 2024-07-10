import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface PostOffice {
  Name: string;
  BranchType: string;
  DeliveryStatus: string;
  Circle: string;
  District: string;
  Division: string;
  Region: string;
  State: string;
  Country: string;
}

interface ApiResponse {
  Message: string;
  Status: string;
  PostOffice: PostOffice[];
}

function PostList() {
  const [postOffices, setPostOffices] = useState<PostOffice[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<ApiResponse[]>('https://api.postalpincode.in/pincode/560037')
      .then((response) => {
        if (response.data[0].Status === 'Success') {
          setPostOffices(response.data[0].PostOffice);
        } else {
          setError('Failed to fetch data');
        }
      })
      .catch((error) => {
        setError('Failed to fetch data');
        console.error(error);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>List of Post Offices</h1>
      {postOffices.map((postOffice, index) => (
        <div key={index}>
          <p>Name: {postOffice.Name}</p>
          <p>Branch Type: {postOffice.BranchType}</p>
          <p>Delivery Status: {postOffice.DeliveryStatus}</p>
          <p>District: {postOffice.District}</p>
          <p>State: {postOffice.State}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostList;
