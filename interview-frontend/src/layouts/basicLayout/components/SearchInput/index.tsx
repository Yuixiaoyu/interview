import {Input, Tag} from 'antd'
import './index.css'
import {SearchOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";

interface Props {

}


/**
 * 搜索条组件
 * @returns
 */
const SearchInput = (props:Props) => {

    const router = useRouter()

    return (
        <div
            className="search-input"
            aria-hidden
            style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
            }}
        >
            <Input.Search
                style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                }}
                placeholder="搜索题目"
                onSearch={(value)=>{
                    router.push(`questions?q=${value}`);
                }}
            />
        </div>
    )
}


export default SearchInput
