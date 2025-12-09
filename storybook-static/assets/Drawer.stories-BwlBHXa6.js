import{D as n,r as a,R as e,b as l}from"./iframe-CPIFpGmq.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Overlay/Drawer",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},position:{control:"select",options:["top","right","bottom","left"]},withCloseButton:{control:"boolean"}}},r={args:{children:"Default Drawer",withCloseButton:!0}},t=()=>{const[s,o]=a.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{onClick:()=>o(!0)},"Open Drawer"),e.createElement(n,{opened:s,onClose:()=>o(!1),title:"Example Drawer"},e.createElement("p",null,"Drawer content goes here.")))};t.__docgenInfo={description:"",methods:[],displayName:"WithButton"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Drawer',
    withCloseButton: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [opened, setOpened] = useState(false);
  return <>
      <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      <Drawer opened={opened} onClose={() => setOpened(false)} title="Example Drawer">
        <p>Drawer content goes here.</p>
      </Drawer>
    </>;
}`,...t.parameters?.docs?.source}}};const i=["withCloseButton","WithButton"];export{t as WithButton,i as __namedExportsOrder,u as default,r as withCloseButton};
