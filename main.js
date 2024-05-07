let studentId = "20215644"; // sua mssv cho nay
let studentName = "Cao Ngọc Thắng"
function addDblclickEvent(ele) {
    ele.addEventListener('dblclick', function() {
        // Tạo một trường nhập mới
        let input = document.createElement('input');
        input.type = 'text';
        input.value = '';
        
        // Thay thế 'info-field' bằng trường nhập
        this.textContent = '';
        this.appendChild(input);
        input.focus();

        // Khi trường nhập mất focus, cập nhật 'info-field'
        input.addEventListener('blur', function() {
            if(ele.id == 'group-text'){
                this.parentNode.textContent = this.value + '_' + studentId;
            }else{
                this.parentNode.textContent = this.value
            }
        });
    });
}


document.querySelector('.add-group-item').addEventListener('click', function() {
    // Tạo một bảng mới
    flag = (document.getElementById('main').children.length === 1)

    let table = document.createElement('table');
    table.id = 'group-item';


    let groupText = document.createElement('span')
    groupText.id = 'group-text';
    if(flag){
        groupText.textContent = "Thong tin sinh vien_" +studentId;
    }else{
        groupText.textContent = "Group Item_" + studentId;
    }
    table.appendChild(groupText);
    addDblclickEvent(groupText);


    let addButton = document.createElement('button');
    addButton.textContent = "Add Info Item"
    table.appendChild(addButton)
    addButton.addEventListener('click', function() {
        // Tạo một dòng mới
        let tr = document.createElement('tr');
        tr.className = 'info-item';
    
        // Tạo các ô mới trong dòng
        let td1 = document.createElement('td');
        td1.className = 'info-field';
        td1.textContent = 'Info Item';
        addDblclickEvent(td1, studentId);
    
        let td2 = document.createElement('td');
        td2.innerHTML = '<input type="text">';
    
        let td3 = document.createElement('td');
        td3.id = 'trash-info';
        td3.className = 'ti-trash';
        td3.addEventListener('click', function() {
            // Xác nhận trước khi xóa
            this.parentNode.remove();
        });
    
        // Thêm các ô vào dòng
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    
        // Thêm dòng vào bảng
        table.appendChild(tr);
    });
    // Tạo nút xóa nếu đây không phải là bảng đầu tiên
    if (document.getElementById('main').children.length > 1) {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.id = 'delete'
        deleteButton.addEventListener('click', function() {
            if (confirm(`Are you sure you want to delete this group item?\nHọ và Tên: ${studentName}\nMã Số Sinh Viên: ${studentId}`)) {
                this.parentNode.remove();
            }
        });
        table.appendChild(deleteButton);
    }

    // Tạo 3 dòng mới trong bảng
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');
        tr.className = 'info-item';

        // Tạo các ô mới trong dòng
        let td1 = document.createElement('td');
        td1.className = 'info-field';
        if(flag && i == 0){
            td1.textContent = 'Ho va Ten'
        }else if(flag && i == 1){
            td1.textContent = 'Ma so sinh vien'
        }else if(flag && i == 2){
            td1.textContent = 'Chuong trinh dao tao'
        }else{
            td1.textContent = 'Info-item';
        }
        addDblclickEvent(td1, studentId);

        let td2 = document.createElement('td');
        td2.innerHTML = '<input type="text">';

        let td3 = document.createElement('td');
        td3.id = 'trash-info';
        td3.className = 'ti-trash';

        // Thêm các ô vào dòng
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        // Thêm dòng vào bảng
        table.appendChild(tr);
        td3.addEventListener('click', function() {
            // Xác nhận trước khi xóa
            this.parentNode.remove();
        });
    }

    // Thêm bảng vào cuối div#main
    document.getElementById('main').appendChild(table);
});
