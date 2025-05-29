"use client";
import Twixtdemo from '@/components/twixtdemo';
import { useEffect, useState } from 'react';
import { fakeMediaList } from '@/data/twixtdata';

export default function Page() {
  //const [mediaList, setMediaList] = useState([]);

 // useEffect(() => {
    //fetch('/api/media')
      //.then(res => res.json())
      //.then(data => setMediaList(data))
     // .catch(() => setMediaList([])); // fallback kalau error
  // }, []);

  return (
    <div>
      <Twixtdemo data={fakeMediaList} />
    </div>
  );
}
