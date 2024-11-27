import ArgonTypography from "../../../components/ArgonTypography";

// var testdata = [
//     {
//         "id": 1,
//         "userName": "test",
//         "email": "test@example.com",
//         "role": "Admin",
//         "defaultPassword": "admin@123",
//         "status": "Active",
//         "eventOccurence": "2024-09-09T10:00:00Z",
//     },
//     {
//         "id": 2,
//         "userName": "superuser",
//         "email": "superadmin@example.com",
//         "role": "Super Admin",
//         "defaultPassword": "admin@1234",
//         "status": "Active",
//         "eventOccurence": "2024-09-09T11:00:00Z",
//     },
//     {
//         "id": 3,
//         "userName": "testuser",
//         "email": "testuser@example.com",
//         "role": "User",
//         "defaultPassword": "user@003",
//         "status": "Active",
//         "eventOccurence": "2024-09-08T15:30:00Z",
//     },
//     {
//         "id": 4,
//         "userName": "user1",
//         "email": "user1@example.com",
//         "role": "User",
//         "defaultPassword": "user@004",
//         "status": "Active",
//         "eventOccurence": "2024-09-07T09:45:00Z",
//     },
//     {
//         "id": 5,
//         "userName": "user2",
//         "email": "user2@example.com",
//         "role": "User",
//         "defaultPassword": "user@005",
//         "status": "Active",
//         "eventOccurence": "2024-09-06T12:15:00Z",
//     }
// ];


export function viewUserTableData(data) {
    return {
        filterIntialValue: {
            sort: {},
            filter: {}
        },
        columns: [
            { name: "userName", label: "User Name", align: "center" },
            { name: "userEmail", label: "Email", align: "center" }, 
            { name: "userRole", label: "Role", align: "center" },
            { name: "active", label: "Status", align: "center" },
            { name: "createdAt", label: "Created Date", align: "center" },
            { name: "action", label: "Actions", align: "center" },

        ],
        rows: data == null ? [] : data.map((user) => ({
            userName: (
                <ArgonTypography px={4} variant="caption" color="secondary" fontWeight="medium">
                    {user.userName}
                </ArgonTypography>
            ),
            userEmail: (
                <ArgonTypography px={4} variant="caption" color="secondary" fontWeight="medium">
                    {user.userEmail}
                </ArgonTypography>
            ),
            userRole: (
                <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
                    {user.userRole}
                </ArgonTypography>
            ),
            
            active: (
                <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
                 {user.active ? "Active" : "Inactive"}
                </ArgonTypography>

            ),
            createdAt: (
                <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
                    {user.createdAt}
                </ArgonTypography>
            ),
            item: user
        }))
    };
}