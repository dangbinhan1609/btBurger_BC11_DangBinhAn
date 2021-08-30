import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BaiTapBurger.css'

class BaiTapBurger extends Component {

    renderMiddle = () => {
        let { burger } = this.props;

        return Object.entries(burger).map(([propsBurger, value], index) => {

            let middle = [];
            for (let i = 0; i < value; i++) {
                middle.push(<div key={i} className={propsBurger}></div>)
            }
            return middle;
        })
    }

    renderMenu = () => {
        let { menu, burger } = this.props;
        return Object.entries(menu).map(([propsMenu, price], index) => {
            return (
                <tr key={index}>
                    <td>{propsMenu}</td>
                    <td>
                        <button onClick={() => { this.props.addMiddle(propsMenu, 1) }} className="btn mr-1 btn-success">+</button>
                        {burger[propsMenu]}
                        <button onClick={() => { this.props.addMiddle(propsMenu, -1) }} className="btn ml-1 btn-danger">-</button>
                    </td>
                    <td>{price}</td>
                    <td>{burger[propsMenu] * price}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="display-4 text-success">Bài Tập Burger</h3>
                <div className='row'>
                    <div className="col-7">
                        <h3 className="text-center text-danger">HAMBURGER</h3>
                        <div className="breadTop"></div>
                        {this.renderMiddle()}
                        <div className="breadBottom"></div>
                    </div>
                    <div className="col-5">
                        <h3 className="text-center text-danger">Chọn thức ăn</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Thức ăn</th>
                                    <th></th>
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                </tr>
                                {this.renderMenu()}
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td><strong>Tổng cộng</strong></td>
                                    <td>{this.props.total}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMiddle: (propsBurger, amount) => {
            const action = {
                type: 'ADD_MIDDLE',
                propsBurger,
                amount
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger)
