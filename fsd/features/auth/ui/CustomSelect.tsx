import React, { useRef, useState } from 'react';
import { Select } from 'antd';
import l from '@/fsd/features/auth/ui/LoginForm.module.scss';
import { useLockBodyScroll } from '@/fsd/shared/hooks/useLockBodyScroll';

interface OptionType {
	value: any;
	label: string;
}

interface CustomSelectProps {
	id: string;
	status?: 'error'; // сделали необязательным
	placeholder: string;
	defaultValue?: string; // убрали undefined, оставили только string
	onChange: (value: string) => void; // изменён тип
	options: OptionType[];
}

export const CustomSelect = ({
	id,
	status,
	placeholder,
	defaultValue,
	onChange,
	options,
}: CustomSelectProps) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	useLockBodyScroll(dropdownOpen);

	return (
		<Select
			id={id}
			placeholder={placeholder}
			status={status}
			onChange={onChange}
			options={options}
			open={dropdownOpen}
			onDropdownVisibleChange={open => setDropdownOpen(open)}
			defaultValue={defaultValue}
			className={l.customSelect}
			dropdownStyle={{
				backgroundColor: '#111a14',
				border: '2px solid #84cc16',
				borderRadius: '16px',
				color: '#84cc16',
				overscrollBehavior: 'contain',
			}}
			dropdownRender={menu => <div className={l.select_item}>{menu}</div>}
		/>
	);
};
