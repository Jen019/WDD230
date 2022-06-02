let lastVisitDate;
    const now = Date.now();
    if(window.localStorage.getItem('last-visit-date')){
        lastVisitDate = parseInt(window.localStorage.getItem('last-visit-date'));
    
    }
      else{
          lastVisitDate = now;
      }

      window.localStorage.setItem('last-visit-date', now);

      const secondsSinceLastVisit = Math.floor((now - lastVisitDate) / 1000);
      const daysSinceLastVisit = Math.floor(secondsSinceLastVisit / 86400); //dividing by seconds in a day

      document.querySelector('#seconds-ago').textContent = secondsSinceLastVisit;
      document.querySelector('#days-ago').textContent= daysSinceLastVisit;
      