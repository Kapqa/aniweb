export default function Input({ onChange, label, type = 'text', placholder = '', maxLength }) {
	return (
		<label className="flex flex-col gap-1 items-start w-full">
			{label}
			<input
				maxLength={maxLength}
				type={type}
				placeholder={placholder}
				className="outline-none border-none rounded-xl bg-zinc-900 w-full px-5 py-2"
				onChange={({ target }) => onChange(target.value)}
			/>
		</label>
	);
}
