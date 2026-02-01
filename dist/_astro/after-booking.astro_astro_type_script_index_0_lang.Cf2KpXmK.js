document.addEventListener("DOMContentLoaded",()=>{const i=new URLSearchParams(window.location.search),a=i.get("type")||"yoga",e={name:i.get("name")||"",email:i.get("email")||"",title:i.get("title")||"",teacher:i.get("teacher")||"",time:i.get("time")||"",display_date:i.get("display_date")||i.get("date")||"",price:i.get("price")||"",peopleCount:i.get("peopleCount")||"",isMember:i.get("isMember")||"false",couponCode:i.get("couponCode")||""},o=document.getElementById("greeting-title");if(o&&e.name){const n=a==="icebath"?"🧊❄️":"🧘‍♀️";o.textContent=`See you soon ${e.name}! ${n}`}if(a==="icebath"){const n=document.querySelector("header + p, .text-center > p");n&&(n.textContent="Your ice bath session has been reserved! Don't forget to bring a towel and swimwear. We're excited to see you at Koh Tao Yoga.")}let t=`
      <div style="background: linear-gradient(135deg, #d0724d 0%, #f0ab92 100%); border-radius: 16px; padding: 32px; color: white; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);">
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 24px; text-align: center;">${a==="icebath"?"Your Ice Bath Summary":"Your Yoga Booking Summary"}</h2>
        <div style="display: flex; flex-direction: column; gap: 16px;">
    `;if(a==="icebath"?t+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Experience</div>
          <div style="text-align: right;">Ice Bath (All-day)</div>
        </div>
      `:e.title&&(t+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Class</div>
          <div style="text-align: right;">${decodeURIComponent(e.title)}</div>
        </div>
      `),e.teacher&&a!=="icebath"&&(t+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Teacher</div>
          <div style="text-align: right;">${e.teacher}</div>
        </div>
      `),e.display_date&&(t+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Date</div>
          <div style="text-align: right;">${decodeURIComponent(e.display_date)}</div>
        </div>
      `),e.time&&(t+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">${a==="icebath"?"Arrival Time":"Time"}</div>
          <div style="text-align: right;">${decodeURIComponent(e.time)}</div>
        </div>
      `),e.price&&e.peopleCount){const n=parseFloat(e.price.replace(/[^0-9.-]+/g,""))||0,l=parseInt(e.peopleCount)||1,d=n*l;t+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Price per person</div>
          <div style="text-align: right;">${e.price}</div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Total Price</div>
          <div style="text-align: right; font-weight: 700; font-size: 1.1rem;">${d.toLocaleString()} THB</div>
        </div>
      `}else e.price&&(t+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Price</div>
          <div style="text-align: right; font-weight: 600;">${e.price} THB</div>
        </div>
      `);t+='<div style="height: 1px; background: rgba(255, 255, 255, 0.3); margin: 8px 0;"></div>',e.peopleCount&&(t+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">People</div>
          <div style="text-align: right;">${e.peopleCount}</div>
        </div>
      `),e.name&&(t+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Name</div>
          <div style="text-align: right;">${e.name}</div>
        </div>
      `),e.couponCode&&(t+=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
          <div style="font-weight: 600; opacity: 0.9; font-size: 0.9rem;">Coupon Code</div>
          <div style="text-align: right;">${e.couponCode}</div>
        </div>
      `),t+=`
        </div>
      </div>
    `;const s=document.getElementById("booking-summary");s&&(s.innerHTML=t)});
