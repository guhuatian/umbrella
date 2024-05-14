
document.addEventListener('DOMContentLoaded', () => {
    const storagePoints = [
        { name: '图书馆入口', available: 10 },
        { name: '教学楼A栋', available: 5 },
        { name: '学生宿舍1号楼', available: 8 },
        { name: '食堂门口', available: 7 }
    ];

    const storagePointsContainer = document.getElementById('storage-points');

    storagePoints.forEach(point => {
        const pointDiv = document.createElement('div');
        pointDiv.className = 'storage-point';
        pointDiv.innerHTML = `<h3>${point.name}</h3><p>可用雨伞数量: ${point.available}</p>`;
        storagePointsContainer.appendChild(pointDiv);
    });
});
