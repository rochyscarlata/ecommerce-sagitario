// import React from 'react';
// import { Upload, message } from 'antd';
// import { InboxOutlined } from '@ant-design/icons';
// import "./style.css";

// const { Dragger } = Upload;

// const Drag = () => {
//     const props = {
//         name: 'file',
//         multiple: true,
//         action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//         onChange(info) {
//           const { status } = info.file;
//           if (status !== 'uploading') {
//             console.log(info.file, info.fileList);
//           }
//           if (status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully.`);
//           } else if (status === 'error') {
//             message.error(`${info.file.name} file upload failed.`);
//           }
//         },
//       };
//         return ( 
//             <div className="drag">     
//             <Dragger {...props}>
//         <p className="ant-upload-drag-icon text-white text-center" style={{fontSize:"30px"}}>
//           <InboxOutlined />
//         </p>
//         <p className="ant-upload-text text-center">Clickear o arrastre imagen aca</p>
        
//       </Dragger>
//       </div>

//        );

// }
 
// export default Drag;