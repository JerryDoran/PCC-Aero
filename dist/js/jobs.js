const modal = document.getElementById("jobsModal");
const buttons = [...document.querySelectorAll(".apply")];
const closeBtn = document.querySelector(".close-btn");

// closeBtn.addEventListener('click', closeModal);

window.addEventListener("click", clickOutside);

class Jobs {
  async getJobs() {
    try {
      let result = await fetch("jobs.json");
      let data = await result.json();

      let jobs = data.jobs;

      // Mapping the jobs array to return data fields that mean something to us
      jobs = jobs.map(job => {
        // Destructuring the json file to pull out the data we want
        const { id, title, desc, skills, education, experience } = job;

        return { id, title, desc, skills, education, experience };
      });
      return jobs;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  displayModal(jobs) {
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        let id = button.dataset.target;
        console.log(id);
        openModal(jobs, id);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const jobs = new Jobs();
  const ui = new UI();

  // Get job information
  jobs.getJobs().then(jobs => {
    ui.displayModal(jobs);
  });
});

function openModal(jobs, id) {
  jobs.forEach(job => {
    if (job.id == id) {
      let result = `
      <div class="modal-content">
          <div class="modal-header">
            <h2>${job.title} </h2>      
          </div>
          <div class="modal-body">
            <h6 class="modal-desc">DESCRIPTION</h6>
            <div class="modal-job-desc">
                <p>${job.desc}</p>
            </div>
            <h6 class="modal-desc">SKILLS</h6>
            <div class="modal-job-skills">
                <p>${job.skills}</p>
            </div>
            <h6 class="modal-desc">EDUCATION</h6>
            <div class="modal-job-education">
                <p>${job.education}</p>
            </div>
            <h6 class="modal-desc">EXPERIENCE</h6>
            <div class="modal-job-experience">
                <p>${job.experience}</p>
            </div>
            
          </div>
      </div>      
      `;

      modal.innerHTML = result;
    }
  });

  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function clickOutside(e) {
  console.log(e.target);
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
