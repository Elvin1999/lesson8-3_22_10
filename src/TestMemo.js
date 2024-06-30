import React, { useMemo } from 'react';
 
function TestMemo({ items }) {
  // Pahalı hesaplama işlemi
  const calculateTotal = (items) => {
    console.log('Calculating total...');
    return items.reduce((total, item) => total + item, 0);
  };
 
  // useMemo ile toplam değeri hesapla ve bağımlılık olarak items kullan
  const total = useMemo(() => calculateTotal(items), [items]);
 
  return (
<div>
<h1>Total Price: {total}</h1>
<ul>
        {items.map(item => (
<li >{item}</li>
        ))}
</ul>
</div>
  );
}
 
export default TestMemo;