import { useState, useEffect } from 'react';

function SquaredDistance() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:18080/squared-distance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            x1: 4.5,
            x2: 32.5,
            y1: 55.5,
            y2: 20.5
          })
        });

        const { status, data: responseData } = await response.json();
        console.log(status);
        if (status) {
          setData(responseData);
        } else {
          setError('Error fetching data');
        }
      } catch (error) {
        setError('zError fetching data' + error);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>The squared distance is: <b>{data}</b></h3>
    </div>
  );
}

export default SquaredDistance;