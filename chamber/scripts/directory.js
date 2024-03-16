document.addEventListener('DOMContentLoaded', function () {
    const gridButton = document.getElementById('gridButton');
    const listButton = document.getElementById('listButton');
    const membersContainer = document.getElementById('membersContainer');
  
    let membersData;
  
    function createMemberCard(member) {
      const card = document.createElement('div');
      card.classList.add('member-card');
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" />
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p>Membership Level: ${member.membership_level}</p>
      `;
      return card;
    }
  
    function createMemberListItem(member) {
      const listItem = document.createElement('div');
      listItem.classList.add('member-list-item');
      listItem.innerHTML = `
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p>Membership Level: ${member.membership_level}</p>
      `;
      return listItem;
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
        const memberItem = createMemberListItem(member);
        membersContainer.appendChild(memberItem);
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
  
    gridButton.addEventListener('click', displayMembersGrid);
    listButton.addEventListener('click', displayMembersList);
  });
  