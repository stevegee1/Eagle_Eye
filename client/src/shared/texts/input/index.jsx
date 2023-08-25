export function InputText({
  className,
  placeholder,
  value,
  name,
  type,
  id,
  labelText,
  onChange,
  error,
}) {
  return (
    <div className="mb-4 font-campton">
      <label className="block mb-2 text-coolGray-800" htmlFor={id}>
        {labelText}
      </label>
      <input
        id={id}
        className={`mb-1 appearance-none block w-full p-3 leading-5 text-resblue border border-gray rounded placeholder-gray outline-0 focus:outline-0 ${className}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div>{error && <small className="text-red-500">{error}</small>}</div>
    </div>
  );
}
