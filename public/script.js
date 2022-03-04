$(document).ready( function () {
    // Setup - add a text input to each footer cell
    $('#customer_table tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

    // DataTable
    var table = $('#customer_table').DataTable({        
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copyHtml5',
                exportOptions: {
                    columns: [ 1, 2, 3, 4, 5 ]
                }
            },
            {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: [ 1, 2, 3, 4, 5 ]
                }
            },
            {
                extend: 'pdfHtml5',
                exportOptions: {
                    columns: [ 1, 2, 3, 4, 5 ]
                },
                customize: function (doc) {
                    doc.content[1].table.widths = 
                        Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                  }
            },
            'colvis'
        ],
        initComplete: function () {
            // Apply the search
            this.api().columns().every( function () {
                var that = this;
 
                $( 'input', this.footer() ).on( 'keyup change clear', function () {
                    if ( that.search() !== this.value ) {
                        that
                            .search( this.value )
                            .draw();
                    }
                } );
            } );
        }
    });

} );

// var editor;

// $(document).ready(function() {
//     editor = new $.fn.dataTable.Editor( {
//         // ajax: "../php/staff.php",
//         table: "#example",
//         fields: [ {
//                 label: "Nama:",
//                 name: "nama"
//             }, {
//                 label: "Alamat:",
//                 name: "alamat"
//             }, {
//                 label: "Customer Type:",
//                 name: "customer_type"
//             }, {
//                 label: "Tanggal Lahir:",
//                 name: "tanggal_lahir",
//                 type: "datetime"
//             }, {
//                 label: "Status:",
//                 name: "status"
//             }
//         ]
//     } );
    
//     // Setup - add a text input to each footer cell
//     $('#example tfoot .add_search').each( function () {
//         var title = $(this).text();
//         $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
//     } );
    

//     // Activate an inline edit on click of a table cell
//     $('#example').on( 'click', 'tbody td:not(:first-child)', function (e) {
//         editor.inline( this );
//     } );

//     // DataTable
//     $('#example').DataTable({
//         dom: 'Bfrtip',
//         buttons: [
//             {
//                 extend: 'copyHtml5',
//                 exportOptions: {
//                     columns: [ 0, ':visible' ]
//                 }
//             },
//             {
//                 extend: 'excelHtml5',
//                 exportOptions: {
//                     columns: ':visible'
//                 }
//             },
//             {
//                 extend: 'pdfHtml5',
//                 exportOptions: {
//                     columns: [ 1, 2, 3, 4, 5 ]
//                 }
//             },
//             { extend: "create", editor: editor },
//             { extend: "edit",   editor: editor },
//             { extend: "remove", editor: editor },
//             'colvis'
//         ],

//         initComplete: function () {
//             // Apply the search
//             this.api().columns().every( function () {
//                 var that = this;
 
//                 $( 'input', this.footer() ).on( 'keyup change clear', function () {
//                     if ( that.search() !== this.value ) {
//                         that
//                             .search( this.value )
//                             .draw();
//                     }
//                 } );
//             } );
//         },
        
//         // inline editing                
//         order: [[ 1, 'asc' ]],
//         columns: [
//             { data: "nama" },
//             { data: "alamat" },
//             { data: "customer_type" },
//             { data: "tanggal_lahir" },
//             { data: "status" }            
//         ],
//         select: {
//             style:    'os',
//             selector: 'td:first-child'
//         }
//     });
// } );