import{j as r}from"./jsx-runtime-DWbWqHZ-.js";import{r as o}from"./index-l2PZgWEW.js";import{_ as i}from"./extends-CF3RwP-h.js";import{$ as v,c as R}from"./index-R_pdLf0c.js";import{a as B,c as h}from"./index-Qo3TVfqq.js";import{h as T,g as E,c as C,$ as O,i as k,a as w,e as P,f as L}from"./index-B_Ei7uan.js";import{c as x}from"./cn-DlbhWEP8.js";import{B as b}from"./button-CmqSo_T8.js";import"./index-CaNG7YX3.js";import"./index-DpBNiyLe.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-WU1Z4LZe.js";const j="AlertDialog",[M,ie]=v(j,[T]),d=T(),V=t=>{const{__scopeAlertDialog:a,...e}=t,n=d(a);return o.createElement(E,i({},n,e,{modal:!0}))},S=t=>{const{__scopeAlertDialog:a,...e}=t,n=d(a);return o.createElement(C,i({},n,e))},H=o.forwardRef((t,a)=>{const{__scopeAlertDialog:e,...n}=t,s=d(e);return o.createElement(O,i({},s,n,{ref:a}))}),y="AlertDialogContent",[q,de]=M(y),N=o.forwardRef((t,a)=>{const{__scopeAlertDialog:e,children:n,...s}=t,c=d(e),m=o.useRef(null),$=B(a,m),u=o.useRef(null);return o.createElement(k,{contentName:y,titleName:I,docsSlug:"alert-dialog"},o.createElement(q,{scope:e,cancelRef:u},o.createElement(w,i({role:"alertdialog"},c,s,{ref:$,onOpenAutoFocus:R(s.onOpenAutoFocus,l=>{var p;l.preventDefault(),(p=u.current)===null||p===void 0||p.focus({preventScroll:!0})}),onPointerDownOutside:l=>l.preventDefault(),onInteractOutside:l=>l.preventDefault()}),o.createElement(h,null,n),!1)))}),I="AlertDialogTitle",z=o.forwardRef((t,a)=>{const{__scopeAlertDialog:e,...n}=t,s=d(e);return o.createElement(P,i({},s,n,{ref:a}))}),F=o.forwardRef((t,a)=>{const{__scopeAlertDialog:e,...n}=t,s=d(e);return o.createElement(L,i({},s,n,{ref:a}))}),G=V,J=S,K=H,Q=N,U=z,W=F,g=({title:t,description:a,open:e,onOk:n,onCancel:s,classNames:c,okButtonProps:m,cancelButtonProps:$,hideCancelButton:u=!1,okText:l="Confirm",cancelText:p="Cancel"})=>r.jsx(G,{open:e,children:r.jsxs(J,{children:[r.jsx(K,{className:"fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),r.jsxs(Q,{className:"fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-lg border bg-white p-5 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",children:[t&&r.jsx(U,{className:x("mb-2 text-center text-lg font-bold",c==null?void 0:c.title),children:t}),a&&r.jsx(W,{className:x("mb-5 text-center",c==null?void 0:c.description),children:a}),r.jsxs("div",{className:"flex gap-2",children:[!u&&r.jsx(b,{variant:"outlined",block:!0,onClick:s,...$,children:p}),r.jsx(b,{variant:"primary",block:!0,onClick:n,...m,children:l})]})]})]})});g.__docgenInfo={description:"",methods:[],displayName:"AlertDialog",props:{title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},okText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Confirm'",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Cancel'",computed:!1}},okButtonProps:{required:!1,tsType:{name:"intersection",raw:`React.ButtonHTMLAttributes<HTMLButtonElement> &
VariantProps<typeof buttonVariants>`,elements:[{name:"ReactButtonHTMLAttributes",raw:"React.ButtonHTMLAttributes<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"VariantProps",elements:[{name:"buttonVariants"}],raw:"VariantProps<typeof buttonVariants>"}]},description:""},cancelButtonProps:{required:!1,tsType:{name:"intersection",raw:`React.ButtonHTMLAttributes<HTMLButtonElement> &
VariantProps<typeof buttonVariants>`,elements:[{name:"ReactButtonHTMLAttributes",raw:"React.ButtonHTMLAttributes<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"VariantProps",elements:[{name:"buttonVariants"}],raw:"VariantProps<typeof buttonVariants>"}]},description:""},hideCancelButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},classNames:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title?: string
  description?: string
}`,signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}}]}},description:""}}};const pe={title:"ui/AlertDialog",component:g,parameters:{controls:{exclude:["open","okButtonProps","cancelButtonProps"]}},args:{title:"Lorem Ipsum",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",hideCancelButton:!1},argTypes:{}},f=({...t})=>{const[a,e]=o.useState(!1);return r.jsxs("div",{children:[r.jsx(b,{onClick:()=>e(!0),children:"Open Alert Dialog"}),r.jsx(g,{open:a,onCancel:()=>e(!1),onOk:()=>{alert("Ok Button Clicked"),e(!1)},...t})]})};f.__docgenInfo={description:"",methods:[],displayName:"_AlertDialog"};var _,A,D;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`({
  ...props
}: Story["args"]) => {
  const [opened, setOpened] = useState(false);
  return <div>
      <Button onClick={() => setOpened(true)}>Open Alert Dialog</Button>
      <AlertDialog open={opened} onCancel={() => setOpened(false)} onOk={() => {
      alert("Ok Button Clicked");
      setOpened(false);
    }} {...props} />
    </div>;
}`,...(D=(A=f.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const fe=["_AlertDialog"];export{f as _AlertDialog,fe as __namedExportsOrder,pe as default};
