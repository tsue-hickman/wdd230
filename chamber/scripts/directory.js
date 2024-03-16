document.addEventListener('DOMContentLoaded', function () {
    const gridButton = document.getElementById('gridButton');
    const listButton = document.getElementById('listButton');
    const membersContainer = document.getElementById('membersContainer');
  
    let membersData;
    let isGridView = true;
  
    function createMemberCard(member) {
      const card = document.createElement('article');
      card.classList.add('member');
      card.innerHTML = `
        <section>
          <img src="images/${member.image}" alt="${member.name}" />
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
          <p>Membership Level: ${member.membership_level}</p>
        </section>
      `;
      return card;
    }
  
    function toggleView() {
      if (isGridView) {
        displayMembersList();
      } else {
        displayMembersGrid();
      }
      isGridView = !isGridView;
    }
  
    function displayMembersGrid() {
      membersContainer.innerHTML = ''; // Clear previous content
      membersData.forEach(member => {
        const memberCard = createMemberCard(member);
        membersContainer.appendChild(memberCard);
      });
      membersContainer.classList.remove('list-view');
      membersContainer.classList.add('grid-view');
    }
  
    function displayMembersList() {
      membersContainer.innerHTML = ''; // Clear previous content
      membersData.forEach(member => {
        const memberCard = createMemberCard(member);
        membersContainer.appendChild(memberCard);
      });
      membersContainer.classList.remove('grid-view');
      membersContainer.classList.add('list-view');
    }
  
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
        membersData = data;
        displayMembersGrid(); // Initial display (default grid)
      })
      .catch(error => console.error('Error fetching members data:', error));
  
    gridButton.addEventListener('click', toggleView);
    listButton.addEventListener('click', toggleView);
  });
  