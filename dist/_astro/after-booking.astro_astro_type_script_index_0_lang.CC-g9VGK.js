document.addEventListener("DOMContentLoaded",()=>{const t=new URLSearchParams(window.location.search),o=t.get("type")||"yoga",d=t.get("prepay")==="true",e={name:t.get("name")||"",email:t.get("email")||"",title:t.get("title")||"",teacher:t.get("teacher")||"",time:t.get("time")||"",display_date:t.get("display_date")||t.get("date")||"",price:t.get("price")||"",peopleCount:t.get("peopleCount")||"",isMember:t.get("isMember")||"false",couponCode:t.get("couponCode")||""},a=document.getElementById("booking-message"),r=t.get("mode");a&&(r==="CANCEL"?(a.textContent="You have canceled the payment. The booking is not confirmed.",a.style.color="#e53e3e"):d&&(a.textContent="We have received your payment! Your booking is confirmed."));const s=document.getElementById("greeting-title");if(s&&e.name){const n=o==="icebath"?"🧊❄️":"🧘‍♀️";s.textContent=`See you soon ${e.name}! ${n}`}if(o==="icebath"){const n=document.querySelector("header + p, .text-center > p");n&&(n.textContent="Your ice bath session has been reserved! Don't forget to bring a towel and swimwear. We're excited to see you at Koh Tao Yoga.")}let i=`
      <div style="background: linear-gradient(135deg, #d0724d 0%, #f0ab92 100%); border-radius: 16px; padding: 32px; color: white; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);">
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 24px; text-align: center;">${o==="icebath"?"Your Ice Bath Summary":"Your Yoga Booking Summary"}</h2>
        <div style="display: flex; flex-direction: column; gap: 16px;">
    `;if(o==="icebath"?i+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Experience</div>
          <div style="text-align: right;">Ice Bath (All-day)</div>
        </div>
      `:e.title&&(i+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Class</div>
          <div style="text-align: right;">${decodeURIComponent(e.title)}</div>
        </div>
      `),e.teacher&&o!=="icebath"&&(i+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Teacher</div>
          <div style="text-align: right;">${e.teacher}</div>
        </div>
      `),e.display_date&&(i+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Date</div>
          <div style="text-align: right;">${decodeURIComponent(e.display_date)}</div>
        </div>
      `),e.time&&(i+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">${o==="icebath"?"Arrival Time":"Time"}</div>
          <div style="text-align: right;">${decodeURIComponent(e.time)}</div>
        </div>
      `),e.price&&e.peopleCount){const n=parseFloat(e.price.replace(/[^0-9.-]+/g,""))||0,p=parseInt(e.peopleCount)||1,c=n*p;i+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Price per person</div>
          <div style="text-align: right;">${e.price}</div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Total Price</div>
          <div style="text-align: right; font-weight: 700; font-size: 1.1rem;">${c.toLocaleString()} THB</div>
        </div>
      `}else e.price&&(i+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Price</div>
          <div style="text-align: right; font-weight: 600;">${e.price} THB</div>
        </div>
      `);i+='<div style="height: 1px; background: rgba(255, 255, 255, 0.3); margin: 8px 0;"></div>',e.peopleCount&&(i+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">People</div>
          <div style="text-align: right;">${e.peopleCount}</div>
        </div>
      `),e.name&&(i+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Name</div>
          <div style="text-align: right;">${e.name}</div>
        </div>
      `),e.couponCode&&(i+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Coupon Code</div>
          <div style="text-align: right;">${e.couponCode}</div>
        </div>
      `),i+=`
        </div>
      </div>
    `;const l=document.getElementById("booking-summary");l&&(l.innerHTML=i)});
